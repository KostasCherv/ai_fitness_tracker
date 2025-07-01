"use client";

import { Button } from "@/components/ui/button";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { ChevronDownIcon, CheckIcon, Loader2Icon } from "lucide-react";
import { useState } from "react";

const QuickPlanSwitcher = ({ userId }: { userId: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChanging, setIsChanging] = useState<string | null>(null);
  const plans = useQuery(api.plans.getUserPlans, { userId });
  const setActivePlan = useMutation(api.plans.setActivePlan);
  const activePlan = plans?.find(p => p.isActive);

  const handleSwitch = async (planId: string) => {
    setIsChanging(planId);
    try {
      await setActivePlan({ userId, planId: planId as any });
      setIsOpen(false);
    } catch (error) {
      console.error("Failed to switch plan:", error);
    } finally {
      setIsChanging(null);
    }
  };

  if (!plans || plans.length <= 1) return null;

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="border-border hover:border-primary/50 text-sm"
        size="sm"
      >
        {activePlan?.name || "Select Plan"}
        <ChevronDownIcon className="w-4 h-4 ml-2" />
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-64 bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg z-50">
          <div className="p-2 space-y-1">
            {plans.map((plan) => (
              <button
                key={plan._id}
                onClick={() => handleSwitch(plan._id)}
                className={`w-full text-left p-3 rounded-md transition-colors ${
                  plan.isActive
                    ? "bg-primary/20 text-primary"
                    : "hover:bg-background/70 text-foreground"
                }`}
                disabled={isChanging === plan._id}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{plan.name}</span>
                  {isChanging === plan._id ? (
                    <Loader2Icon className="w-4 h-4 animate-spin" />
                  ) : plan.isActive ? (
                    <CheckIcon className="w-4 h-4" />
                  ) : null}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {plan.workoutPlan.exercises.length} days • {plan.dietPlan.dailyCalories} kcal
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickPlanSwitcher; 