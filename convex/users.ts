import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const syncUser = mutation({
	args: {
		clerkId: v.string(),
		email: v.string(),
		name: v.string(),
		image: v.string(),
	},
	handler: async (ctx, args) => {
		const { clerkId, email, name, image } = args;
		const existingUser = await ctx.db.query("users").withIndex("by_clerk_id", (q) => q.eq("clerkId", clerkId)).unique();

		if (existingUser) {
			return
		} else {
			await ctx.db.insert("users", {
				clerkId,
				email,
				name,
				image,
			});
		}
	},
});