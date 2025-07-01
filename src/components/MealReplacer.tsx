"use client";

import { Button } from "@/components/ui/button";
import { RefreshCwIcon } from "lucide-react";

interface MealReplacerProps {
  meal: {
    name: string;
    foods: string[];
  };
  mealIndex: number;
  onOpen: (meal: { name: string; foods: string[] }, mealIndex: number) => void;
}

const MealReplacer = ({ meal, mealIndex, onOpen }: MealReplacerProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={e => {
        e.stopPropagation();
        onOpen(meal, mealIndex);
      }}
      className="border-border hover:border-primary/50 text-xs h-7 px-2"
    >
      <RefreshCwIcon className="w-3 h-3 mr-1" />
      Replace
    </Button>
  );
};

export default MealReplacer; 