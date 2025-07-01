"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import NoFitnessPlan from "@/components/NoFitnessPlan";
import CornerElements from "@/components/CornerElements";
import ActivePlanSelector from "@/components/ActivePlanSelector";
import InlineEditableTitle from "@/components/InlineEditableTitle";
import MealReplacer from "@/components/MealReplacer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppleIcon, CalendarIcon, DumbbellIcon, Loader2Icon, CheckIcon, XIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { Textarea } from "@/components/ui/textarea";

const ProfilePage = () => {
  const { user } = useUser();
  const userId = user?.id as string;

  const allPlans = useQuery(api.plans.getUserPlans, { userId });
  const [selectedPlanId, setSelectedPlanId] = useState<null | string>(null);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMeal, setModalMeal] = useState<{ name: string; foods: string[] } | null>(null);
  const [modalMealIndex, setModalMealIndex] = useState<number | null>(null);
  const [modalPreferences, setModalPreferences] = useState("");
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState("");
  const [lastReasoning, setLastReasoning] = useState("");
  const [lastReasoningMealIndex, setLastReasoningMealIndex] = useState<number | null>(null);

  const activePlan = allPlans?.find((plan) => plan.isActive);

  const currentPlan = selectedPlanId
    ? allPlans?.find((plan) => plan._id === selectedPlanId)
    : activePlan;

  // Refresh plans when active plan changes
  const refreshPlans = () => {
    setSelectedPlanId(null);
  };

  // Open modal handler
  const handleOpenMealReplacer = (meal: { name: string; foods: string[] }, mealIndex: number) => {
    setModalMeal(meal);
    setModalMealIndex(mealIndex);
    setModalPreferences("");
    setModalError("");
    setModalOpen(true);
  };

  // Handle meal replacement
  const handleReplaceMeal = async () => {
    if (!modalPreferences.trim() || !modalMeal || modalMealIndex === null || !currentPlan) {
      setModalError("Please enter your preferences.");
      return;
    }
    setModalLoading(true);
    setModalError("");
    try {
      const response = await fetch("/api/replace-meal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          plan_id: currentPlan._id,
          meal_index: modalMealIndex,
          user_preferences: modalPreferences,
          current_meal: modalMeal,
          daily_calories: currentPlan.dietPlan.dailyCalories,
          dietary_restrictions: "None",
          fitness_goal: currentPlan.name.split(" ")[0] || "General Fitness",
        }),
      });
      const data = await response.json();
      if (data.success) {
        setModalOpen(false);
        setModalPreferences("");
        setModalMeal(null);
        setModalMealIndex(null);
        setLastReasoning(data.data?.reasoning || "");
        setLastReasoningMealIndex(modalMealIndex);
        refreshPlans();
      } else {
        setModalError(data.error || "Failed to replace meal");
      }
    } catch {
      setModalError("An error occurred while replacing the meal");
    } finally {
      setModalLoading(false);
    }
  };

  // Loading state
  if (allPlans === undefined) {
    return (
      <section className="relative z-10 pt-12 pb-32 flex-grow container mx-auto px-4">
        <LoadingSkeleton type="profile" />
      </section>
    );
  }

  return (
    <section className="relative z-10 pt-12 pb-32 flex-grow container mx-auto px-4">
      <ProfileHeader user={user} />

      {allPlans && allPlans?.length > 0 ? (
        <div className="space-y-8">
          {/* ACTIVE PLAN SELECTOR */}
          <div className="relative backdrop-blur-sm border border-border p-6 card-glow animate-fadeIn">
            <CornerElements />
            <ActivePlanSelector 
              userId={userId}
              plans={allPlans || []}
              onPlanChange={refreshPlans}
            />
            
            {/* PLAN VIEW SELECTOR */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-foreground">
                  <span className="text-primary text-glow">View</span> Plans
                </h4>
                <div className="font-mono text-xs text-muted-foreground">
                  TOTAL: {allPlans.length}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {allPlans.map((plan, index) => (
                  <Button
                    key={plan._id}
                    onClick={() => setSelectedPlanId(plan._id)}
                    className={`text-foreground border hover:text-white hover-lift focus-cyber transition-all duration-300 ${
                      selectedPlanId === plan._id
                        ? "bg-primary/20 text-primary border-primary animate-pulse-glow"
                        : "bg-transparent border-border hover:border-primary/50 hover:bg-primary/10"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {plan.name}
                    {plan.isActive && (
                      <span className="ml-2 bg-green-500/20 text-green-500 text-xs px-2 py-0.5 rounded animate-pulse">
                        ACTIVE
                      </span>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* PLAN DETAILS */}
          {currentPlan && (
            <div className="relative backdrop-blur-sm border border-border rounded-lg p-6 card-glow animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              <CornerElements />

              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-foreground">PLAN:</span>
                  <InlineEditableTitle
                    planId={currentPlan._id}
                    userId={userId}
                    initialTitle={currentPlan.name}
                    onUpdate={refreshPlans}
                    className="text-lg"
                  />
                </div>
              </div>

              <Tabs defaultValue="workout" className="w-full">
                <TabsList className="mb-6 w-full grid grid-cols-2 bg-cyber-terminal-bg border">
                  <TabsTrigger
                    value="workout"
                    className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary focus-cyber transition-all duration-300"
                  >
                    <DumbbellIcon className="mr-2 size-4" />
                    Workout Plan
                  </TabsTrigger>

                  <TabsTrigger
                    value="diet"
                    className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary focus-cyber transition-all duration-300"
                  >
                    <AppleIcon className="mr-2 h-4 w-4" />
                    Diet Plan
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="workout" className="animate-fadeIn">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <CalendarIcon className="h-4 w-4 text-primary animate-pulse" />
                      <span className="font-mono text-sm text-muted-foreground">
                        SCHEDULE: {currentPlan.workoutPlan.schedule.join(", ")}
                      </span>
                    </div>

                    <Accordion type="multiple" className="space-y-4">
                      {currentPlan.workoutPlan.exercises.map((exerciseDay, index) => (
                        <AccordionItem
                          key={index}
                          value={exerciseDay.day}
                          className="border rounded-lg overflow-hidden hover-lift card-glow"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-primary/10 font-mono transition-all duration-300">
                            <div className="flex justify-between w-full items-center">
                              <span className="text-primary text-glow">{exerciseDay.day}</span>
                              <div className="text-xs text-muted-foreground">
                                {exerciseDay.routines.length} EXERCISES
                              </div>
                            </div>
                          </AccordionTrigger>

                          <AccordionContent className="pb-4 px-4">
                            <div className="space-y-3 mt-2">
                              {exerciseDay.routines.map((routine, routineIndex) => (
                                <div
                                  key={routineIndex}
                                  className="border border-border rounded p-3 bg-background/50 hover:bg-background/70 transition-colors group"
                                >
                                  <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                      {routine.name}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                      <div className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-mono animate-pulse">
                                        {routine.sets} SETS
                                      </div>
                                      <div className="px-2 py-1 rounded bg-secondary/20 text-secondary text-xs font-mono animate-pulse" style={{ animationDelay: "0.5s" }}>
                                        {routine.reps} REPS
                                      </div>
                                    </div>
                                  </div>
                                  {routine.description && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                      {routine.description}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>

                <TabsContent value="diet" className="animate-fadeIn">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-sm text-muted-foreground">
                        DAILY CALORIE TARGET
                      </span>
                      <div className="font-mono text-xl text-primary text-glow animate-pulse">
                        {currentPlan.dietPlan.dailyCalories} KCAL
                      </div>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50 my-4"></div>

                    <div className="space-y-4">
                      {currentPlan.dietPlan.meals.map((meal, index) => (
                        <div
                          key={index}
                          className="relative border border-border rounded-lg overflow-hidden p-4 hover-lift card-glow transition-all duration-300"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                              <h4 className="font-mono text-primary text-glow">{meal.name}</h4>
                            </div>
                            <MealReplacer
                              meal={meal}
                              mealIndex={index}
                              onOpen={handleOpenMealReplacer}
                            />
                          </div>
                          <ul className="space-y-2">
                            {meal.foods.map((food, foodIndex) => (
                              <li
                                key={foodIndex}
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <span className="text-xs text-primary font-mono">
                                  {String(foodIndex + 1).padStart(2, "0")}
                                </span>
                                {food}
                              </li>
                            ))}
                          </ul>
                          {lastReasoningMealIndex === index && lastReasoning && (
                            <div className="text-sm bg-primary/10 border border-primary/30 rounded p-3 mt-4 text-primary flex items-start justify-between gap-2">
                              <div>
                                <strong>Why this meal?</strong><br />
                                {lastReasoning}
                              </div>
                              <button
                                className="ml-4 text-xs text-primary underline hover:text-primary/80"
                                onClick={() => {
                                  setLastReasoning("");
                                  setLastReasoningMealIndex(null);
                                }}
                              >
                                Hide
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      ) : (
        <NoFitnessPlan />
      )}

      {/* Modal for meal replacement */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-6 w-full max-w-md mx-auto relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-foreground">Replace {modalMeal?.name}</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setModalOpen(false)}
                className="h-6 w-6 p-0"
              >
                <XIcon className="w-3 h-3" />
              </Button>
            </div>
            <div className="space-y-2 mb-3">
              <label className="text-sm text-muted-foreground">
                What would you prefer instead?
              </label>
              <Textarea
                placeholder="e.g., I prefer Italian food, I'm allergic to nuts, I want something quick to prepare..."
                value={modalPreferences}
                onChange={e => setModalPreferences(e.target.value)}
                className="min-h-[80px] text-sm"
                disabled={modalLoading}
              />
            </div>
            {modalError && (
              <div className="text-sm text-red-500 bg-red-500/10 p-2 rounded mb-3">
                {modalError}
              </div>
            )}
            <div className="flex gap-2 mb-3">
              <Button
                onClick={handleReplaceMeal}
                disabled={modalLoading || !modalPreferences.trim()}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                size="sm"
              >
                {modalLoading ? (
                  <>
                    <Loader2Icon className="w-3 h-3 mr-1 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <CheckIcon className="w-3 h-3 mr-1" />
                    Replace Meal
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                onClick={() => setModalOpen(false)}
                disabled={modalLoading}
                size="sm"
              >
                Cancel
              </Button>
            </div>
            <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded mb-2">
              <strong>Current meal:</strong> {modalMeal?.foods.join(", ")}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default ProfilePage;
