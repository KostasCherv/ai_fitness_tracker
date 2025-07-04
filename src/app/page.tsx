import TerminalOverlay from "@/components/TerminalOverlay";
import { Button } from "@/components/ui/button";
import UserPrograms from "@/components/UserPrograms";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            {/* CORNER DECARATION */}
            <div className="absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2 animate-pulse-glow" />

            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-7 space-y-8 relative animate-slideInLeft">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <div className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                  <span className="text-foreground">Transform</span>
                </div>
                <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                  <span className="text-primary text-glow">Your Body</span>
                </div>
                <div className="pt-2 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
                  <span className="text-foreground">With Advanced</span>
                </div>
                <div className="pt-2 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
                  <span className="text-foreground">AI</span>
                  <span className="text-primary text-glow"> Technology</span>
                </div>
              </h1>

              {/* SEPERATOR LINE */}
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50 animate-fadeIn" style={{ animationDelay: "0.5s" }}></div>

              <p className="text-xl text-muted-foreground w-2/3 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
                Talk to our AI assistant and get personalized diet plans and workout routines
                designed just for you
              </p>

              {/* STATS */}
              <div className="flex items-center gap-10 py-6 font-mono animate-fadeIn" style={{ animationDelay: "0.7s" }}>
                <div className="flex flex-col hover-lift">
                  <div className="text-2xl text-primary text-glow">500+</div>
                  <div className="text-xs uppercase tracking-wider">ACTIVE USERS</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                <div className="flex flex-col hover-lift">
                  <div className="text-2xl text-primary text-glow">3min</div>
                  <div className="text-xs uppercase tracking-wider">GENERATION</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                <div className="flex flex-col hover-lift">
                  <div className="text-2xl text-primary text-glow">100%</div>
                  <div className="text-xs uppercase tracking-wider">PERSONALIZED</div>
                </div>
              </div>

              {/* BUTTON */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fadeIn" style={{ animationDelay: "0.8s" }}>
                <Button
                  size="lg"
                  asChild
                  className="overflow-hidden bg-gradient-primary text-primary-foreground px-8 py-6 text-lg font-medium hover-lift focus-cyber group"
                >
                  <Link href={"/generate-program"} className="flex items-center font-mono">
                    <SparklesIcon className="mr-2 size-5 animate-pulse" />
                    Build Your Program
                    <ArrowRightIcon className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="lg:col-span-5 relative animate-slideInRight">
              {/* CORNER PIECES */}
              <div className="absolute -inset-4 pointer-events-none">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border animate-pulse-glow" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border animate-pulse-glow" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
              </div>

              {/* IMAGE CONTAINER */}
              <div className="relative aspect-square max-w-lg mx-auto animate-float">
                <div className="relative overflow-hidden rounded-lg bg-cyber-black card-glow">
                  <img
                    src="/hero-ai3.png"
                    alt="AI Fitness Coach"
                    className="size-full object-cover object-center"
                  />

                  {/* SCAN LINE */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-scanline pointer-events-none" />

                  {/* DECORATIONS ON TOP THE IMAGE */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/40 rounded-full animate-slow-spin" />

                    {/* Targeting lines */}
                    <div className="absolute top-1/2 left-0 w-1/4 h-px bg-primary/50" />
                    <div className="absolute top-1/2 right-0 w-1/4 h-px bg-primary/50" />
                    <div className="absolute top-0 left-1/2 h-1/4 w-px bg-primary/50" />
                    <div className="absolute bottom-0 left-1/2 h-1/4 w-px bg-primary/50" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>

                {/* TERMINAL OVERLAY */}
                <TerminalOverlay />
              </div>
            </div>
          </div>
        </div>
      </section>

      <UserPrograms />
    </div>
  );
};
export default HomePage;
