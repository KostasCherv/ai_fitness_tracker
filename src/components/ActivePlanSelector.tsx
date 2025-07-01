"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { CheckIcon, Loader2Icon, ZapIcon } from "lucide-react";
import CornerElements from "./CornerElements";
import PlanNotification from "./PlanNotification";
import InlineEditableTitle from "@/components/InlineEditableTitle";

interface ActivePlanSelectorProps {
  userId: string;
  plans: any[];
  onPlanChange?: () => void;
}

const ActivePlanSelector = ({ userId, plans, onPlanChange }: ActivePlanSelectorProps) => {
  const [isChanging, setIsChanging] = useState<string | null>(null);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const setActivePlan = useMutation(api.plans.setActivePlan);

  const handleSetActive = async (planId: string) => {
    setIsChanging(planId);
    try {
      await setActivePlan({ userId, planId: planId as any });
      setNotification({
        message: "Active plan updated successfully!",
        type: "success"
      });
      onPlanChange?.();
    } catch (error) {
      console.error("Failed to set active plan:", error);
      setNotification({
        message: "Failed to update active plan. Please try again.",
        type: "error"
      });
    } finally {
      setIsChanging(null);
    }
  };

  return (
    <>
      {notification && (
        <PlanNotification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold tracking-tight">
            <span className="text-primary text-glow">Active</span>{" "}
            <span className="text-foreground">Plan</span>
          </h3>
          <div className="font-mono text-xs text-muted-foreground">
            {plans.filter(p => p.isActive).length} ACTIVE
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan._id}
              className={`relative p-5 rounded-lg border transition-all duration-300 hover-lift card-glow ${
                plan.isActive
                  ? "border-primary bg-primary/10 animate-pulse-glow"
                  : "border-border bg-card/50 hover:border-primary/30 hover:bg-card/70"
              }`}
            >
              <CornerElements />
              
              {/* Active Indicator */}
              {plan.isActive && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-pulse">
                  <CheckIcon className="w-4 h-4 text-primary-foreground" />
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <InlineEditableTitle
                    planId={plan._id}
                    userId={userId}
                    initialTitle={plan.name}
                    onUpdate={onPlanChange}
                    className="text-lg"
                  />
                  <p className="text-sm text-muted-foreground">
                    {plan.workoutPlan.exercises.length} workout days
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Daily Calories:</span>
                    <span className="font-mono text-primary text-glow">
                      {plan.dietPlan.dailyCalories} kcal
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Workout Days:</span>
                    <span className="font-mono text-secondary">
                      {plan.workoutPlan.schedule.join(", ")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-muted-foreground font-mono">
                    {plan.isActive ? "CURRENTLY ACTIVE" : "INACTIVE"}
                  </div>
                  
                  {!plan.isActive && (
                    <Button
                      size="sm"
                      onClick={() => handleSetActive(plan._id)}
                      disabled={isChanging === plan._id}
                      className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/30 focus-cyber group"
                    >
                      {isChanging === plan._id ? (
                        <Loader2Icon className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <ZapIcon className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                          Set Active
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ActivePlanSelector; 