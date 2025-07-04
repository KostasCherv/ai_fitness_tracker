import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createPlan = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    workoutPlan: v.object({
      schedule: v.array(v.string()),
      exercises: v.array(
        v.object({
          day: v.string(),
          routines: v.array(
            v.object({
              name: v.string(),
              sets: v.number(),
              reps: v.number(),
            })
          ),
        })
      ),
    }),
    dietPlan: v.object({
      dailyCalories: v.number(),
      meals: v.array(
        v.object({
          name: v.string(),
          foods: v.array(v.string()),
        })
      ),
    }),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    const activePlans = await ctx.db
      .query("plans")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();

    for (const plan of activePlans) {
      await ctx.db.patch(plan._id, { isActive: false });
    }

    const planId = await ctx.db.insert("plans", args);

    return planId;
  },
});

export const getUserPlans = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const plans = await ctx.db
      .query("plans")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();

    return plans;
  },
});

export const setActivePlan = mutation({
  args: {
    userId: v.string(),
    planId: v.id("plans"),
  },
  handler: async (ctx, args) => {
    // 1. Verify plan belongs to user
    const plan = await ctx.db.get(args.planId);
    if (!plan || plan.userId !== args.userId) {
      throw new Error("Plan not found or access denied");
    }

    // 2. Deactivate all other plans
    const activePlans = await ctx.db
      .query("plans")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();

    for (const activePlan of activePlans) {
      await ctx.db.patch(activePlan._id, { isActive: false });
    }

    // 3. Activate selected plan
    await ctx.db.patch(args.planId, { isActive: true });

    return { success: true, planId: args.planId };
  },
});

export const getActivePlan = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const activePlan = await ctx.db
      .query("plans")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("isActive"), true))
      .first();

    return activePlan;
  },
});

export const updatePlanName = mutation({
  args: {
    userId: v.string(),
    planId: v.id("plans"),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    // 1. Verify plan belongs to user
    const plan = await ctx.db.get(args.planId);
    if (!plan || plan.userId !== args.userId) {
      throw new Error("Plan not found or access denied");
    }

    // 2. Validate name
    if (!args.name.trim()) {
      throw new Error("Plan name cannot be empty");
    }

    // 3. Update plan name
    await ctx.db.patch(args.planId, { name: args.name.trim() });

    return { success: true, planId: args.planId };
  },
});

export const replaceMeal = mutation({
  args: {
    userId: v.string(),
    planId: v.id("plans"),
    mealIndex: v.number(),
    newFoods: v.array(v.string()),
    reasoning: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // 1. Verify plan belongs to user
    const plan = await ctx.db.get(args.planId);
    if (!plan || plan.userId !== args.userId) {
      throw new Error("Plan not found or access denied");
    }

    // 2. Validate meal index
    if (args.mealIndex < 0 || args.mealIndex >= plan.dietPlan.meals.length) {
      throw new Error("Invalid meal index");
    }

    // 3. Get the current meal to replace
    const currentMeal = plan.dietPlan.meals[args.mealIndex];

    // 4. Create a new diet plan with the replaced meal
    const updatedMeals = [...plan.dietPlan.meals];
    updatedMeals[args.mealIndex] = {
      name: currentMeal.name,
      foods: args.newFoods,
    };

    const updatedDietPlan = {
      ...plan.dietPlan,
      meals: updatedMeals,
    };

    // 5. Update the plan
    await ctx.db.patch(args.planId, { dietPlan: updatedDietPlan });

    return { 
      success: true, 
      planId: args.planId,
      mealIndex: args.mealIndex,
      currentMeal: currentMeal,
      newMeal: updatedMeals[args.mealIndex],
    };
  },
});
