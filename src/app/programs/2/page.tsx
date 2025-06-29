import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Target, Users, Dumbbell, AppleIcon, ZapIcon, ChevronRight } from "lucide-react";
import Link from "next/link";

const MichaelProgram = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Programs
        </Link>

        {/* Header Section */}
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden mb-8 card-glow">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/70">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm text-primary font-medium text-glow">USER.2</span>
            </div>
            <div className="text-sm text-muted-foreground">INTERMEDIATE</div>
          </div>

          <div className="p-8">
            <div className="flex items-center gap-6 mb-6">
              <div className="h-20 w-20 rounded-full overflow-hidden border border-border">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Michael"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Michael<span className="text-primary text-glow">.exe</span>
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>28y • 5d/week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>Muscle Gain</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="text-sm text-primary font-medium mb-1">Height</div>
                <div className="text-foreground">5&apos;10&quot;</div>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <div className="text-sm text-secondary font-medium mb-1">Weight</div>
                <div className="text-foreground">170 lbs</div>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="text-sm text-primary font-medium mb-1">Equipment</div>
                <div className="text-foreground">Full gym</div>
              </div>
            </div>
          </div>
        </div>

        {/* Workout Plan */}
        <Card className="bg-card/90 backdrop-blur-sm border border-border mb-8 card-glow">
          <CardHeader className="border-b border-border">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-primary/10 text-primary">
                <Dumbbell className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-2xl text-foreground">Hypertrophy-Focused Muscle Building</CardTitle>
                <p className="text-muted-foreground mt-1">Traditional body-part split with progressive overload</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Schedule</h3>
                <div className="space-y-3">
                  {[
                    { day: "Monday", focus: "Chest & Triceps", duration: "45 min" },
                    { day: "Tuesday", focus: "Back & Biceps", duration: "45 min" },
                    { day: "Wednesday", focus: "Recovery/Cardio", duration: "30 min" },
                    { day: "Thursday", focus: "Shoulders & Abs", duration: "45 min" },
                    { day: "Friday", focus: "Legs", duration: "50 min" },
                  ].map((workout, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium text-foreground">{workout.day}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-foreground">{workout.focus}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {workout.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Program Details</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-background/50 rounded-lg border border-border">
                    <div className="text-sm text-primary font-medium mb-2">Training Principles</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Progressive overload focus</li>
                      <li>• Moderate volume training</li>
                      <li>• Adequate recovery periods</li>
                      <li>• Compound movement emphasis</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg border border-border">
                    <div className="text-sm text-primary font-medium mb-2">Muscle Groups</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Chest and triceps</li>
                      <li>• Back and biceps</li>
                      <li>• Shoulders and abs</li>
                      <li>• Legs (quads, hamstrings, calves)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Diet Plan */}
        <Card className="bg-card/90 backdrop-blur-sm border border-border mb-8 card-glow">
          <CardHeader className="border-b border-border">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-secondary/10 text-secondary">
                <AppleIcon className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-2xl text-foreground">Muscle Building Nutrition Plan</CardTitle>
                <p className="text-muted-foreground mt-1">2,800 calories • Protein: 30% • Carbs: 50% • Fats: 20%</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Daily Meal Examples</h3>
                <div className="space-y-3">
                  {[
                    { meal: "Breakfast", example: "Protein oatmeal with banana and whey protein" },
                    { meal: "Lunch", example: "Chicken, rice, and vegetables with olive oil" },
                    { meal: "Dinner", example: "Steak with sweet potato and green vegetables" },
                    { meal: "Snacks", example: "Protein shake with fruit, Greek yogurt with honey" },
                  ].map((meal, index) => (
                    <div key={index} className="p-3 bg-background/50 rounded-lg border border-border">
                      <div className="font-medium text-foreground mb-1">{meal.meal}</div>
                      <div className="text-sm text-muted-foreground">{meal.example}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Nutrition Guidelines</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-background/50 rounded-lg border border-border">
                    <div className="text-sm text-secondary font-medium mb-2">Muscle Building Support</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• High-protein diet</li>
                      <li>• Calorie surplus maintenance</li>
                      <li>• Carbohydrate timing</li>
                      <li>• Minimize fat gain</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg border border-border">
                    <div className="text-sm text-secondary font-medium mb-2">Performance Optimization</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pre-workout nutrition</li>
                      <li>• Post-workout recovery</li>
                      <li>• Adequate hydration</li>
                      <li>• Quality sleep support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Link href="/generate-program">
            <Button className="bg-gradient-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg hover-lift focus-cyber group">
              <ZapIcon className="mr-2 h-5 w-5 animate-pulse" />
              Generate Your Own Program
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MichaelProgram; 