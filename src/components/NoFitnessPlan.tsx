import Link from "next/link";
import CornerElements from "./CornerElements";
import { Button } from "./ui/button";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";

const NoFitnessPlan = () => {
  return (
    <div className="relative backdrop-blur-sm border border-border rounded-lg p-10 text-center card-glow animate-fadeIn">
      <CornerElements />

      <h2 className="text-2xl font-bold mb-4 font-mono animate-fadeIn" style={{ animationDelay: "0.1s" }}>
        <span className="text-primary text-glow">No</span> fitness plans yet
      </h2>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
        Start by creating a personalized fitness and diet plan tailored to your specific goals and
        needs
      </p>
      <Button
        size="lg"
        asChild
        className="relative overflow-hidden bg-gradient-primary text-primary-foreground px-8 py-6 text-lg font-medium hover-lift focus-cyber group animate-fadeIn"
        style={{ animationDelay: "0.3s" }}
      >
        <Link href="/generate-program">
          <span className="relative flex items-center">
            <SparklesIcon className="mr-2 h-5 w-5 animate-pulse" />
            Create Your First Plan
            <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </Button>
    </div>
  );
};
export default NoFitnessPlan;
