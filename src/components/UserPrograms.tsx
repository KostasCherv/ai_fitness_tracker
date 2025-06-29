import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronRight,
  Dumbbell,
  Sparkles,
  Users,
  Clock,
  AppleIcon,
  ShieldIcon,
  ZapIcon,
} from "lucide-react";
import { USER_PROGRAMS } from "@/constants";

const UserPrograms = () => {
  return (
    <div className="w-full pb-24 pt-16 relative">
      <div className="container mx-auto max-w-6xl px-4">
        {/* HEADER- PROGRAM GALLERY */}
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden mb-16 card-glow animate-fadeIn">
          {/* HEADER BAR */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/70">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm text-primary font-medium text-glow">Program Gallery</span>
            </div>
            <div className="text-sm text-muted-foreground">Featured Plans</div>
          </div>

          {/* HEADER CONTENT */}
          <div className="p-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">AI-Generated </span>
              <span className="text-primary text-glow">Programs</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Explore personalized fitness plans our AI assistant has created for other users
            </p>

            {/* STATS */}
            <div className="flex items-center justify-center gap-16 mt-10 font-mono animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-col items-center hover-lift">
                <p className="text-3xl text-primary text-glow">500+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  PROGRAMS
                </p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"></div>
              <div className="flex flex-col items-center hover-lift">
                <p className="text-3xl text-primary text-glow">3min</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  CREATION TIME
                </p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"></div>
              <div className="flex flex-col items-center hover-lift">
                <p className="text-3xl text-primary text-glow">100%</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  PERSONALIZED
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {USER_PROGRAMS.map((program, index) => (
            <Card
              key={program.id}
              className="group bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover-lift card-glow overflow-hidden animate-fadeIn"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Card header with user info */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/70">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm text-primary text-glow">USER.{program.id}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {program.fitness_level.toUpperCase()}
                </div>
              </div>

              <CardHeader className="pt-6 px-5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden border border-border group-hover:border-primary/50 transition-colors">
                    <img
                      src={program.profilePic}
                      alt={`${program.first_name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {program.first_name}
                      <span className="text-primary text-glow">.exe</span>
                    </CardTitle>
                    <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <Users className="h-4 w-4" />
                      {program.age}y • {program.workout_days}d/week
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <div className="px-3 py-1 bg-primary/10 rounded border border-primary/20 text-sm text-primary flex items-center gap-2 group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-4 w-4" />
                    {program.fitness_goal}
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    v3.5
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-5">
                {/* Program details */}
                <div className="space-y-5 pt-2">
                  <div className="flex items-start gap-3 group/item">
                    <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                      <Dumbbell className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-foreground group-hover/item:text-primary transition-colors">
                          {program.workout_plan.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {program.equipment_access}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group/item">
                    <div className="p-2 rounded-md bg-secondary/10 text-secondary mt-0.5 group-hover/item:bg-secondary/20 transition-colors">
                      <AppleIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-foreground group-hover/item:text-secondary transition-colors">{program.diet_plan.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        System optimized nutrition
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group/item">
                    <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                      <ShieldIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-foreground group-hover/item:text-primary transition-colors">AI Safety Protocols</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Protection systems enabled
                      </p>
                    </div>
                  </div>
                </div>

                {/* Program description */}
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="text-sm text-muted-foreground">
                    <span className="text-primary">&gt; </span>
                    {program.workout_plan.description.substring(0, 120)}...
                  </div>
                </div>
              </CardContent>

              <CardFooter className="px-5 py-4 border-t border-border">
                <Link href={`/programs/${program.id}`} className="w-full">
                  <Button className="w-full bg-gradient-primary text-primary-foreground hover:bg-primary/90 focus-cyber group/btn">
                    <ZapIcon className="mr-2 h-4 w-4 group-hover/btn:animate-pulse" />
                    View Program Details
                    <ChevronRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center animate-fadeIn" style={{ animationDelay: "0.8s" }}>
          <Link href="/generate-program">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg hover-lift focus-cyber group"
            >
              <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
              Generate Your Program
              <ZapIcon className="ml-2 h-5 w-5 group-hover:animate-pulse" />
            </Button>
          </Link>
          <p className="text-muted-foreground mt-4">
            Join 500+ users with AI-customized fitness programs
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPrograms;
