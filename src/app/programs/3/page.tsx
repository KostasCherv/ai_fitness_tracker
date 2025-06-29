import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Target, Users, Dumbbell, AppleIcon, ZapIcon, ChevronRight } from "lucide-react";
import Link from "next/link";

const ElenaProgram = () => {
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
              <span className="text-sm text-primary font-medium text-glow">USER.3</span>
            </div>
            <div className="text-sm text-muted-foreground">INTERMEDIATE</div>
          </div>

          <div className="p-8">
            <div className="flex items-center gap-6 mb-6">
              <div className="h-20 w-20 rounded-full overflow-hidden border border-border">
                <img
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  alt="Elena"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Elena<span className="text-primary text-glow">.exe</span>
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>45y • 3d/week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>General Fitness</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="text-sm text-primary font-medium mb-1">Height</div>
                <div className="text-foreground">5&apos;4&quot;</div>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <div className="text-sm text-secondary font-medium mb-1">Weight</div>
                <div className="text-foreground">130 lbs</div>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="text-sm text-primary font-medium mb-1">Equipment</div>
                <div className="text-foreground">Bodyweight only</div>
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
                <CardTitle className="text-2xl text-foreground">Functional Fitness Program</CardTitle>
                <p className="text-muted-foreground mt-1">Functional movement patterns gentle on the knees</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Schedule</h3>
                <div className="space-y-3">
                  {[
                    { day: "Monday", focus: "Bodyweight Strength", duration: "40 min" },
                    { day: "Wednesday", focus: "Mobility & Balance", duration: "35 min" },
                    { day: "Saturday", focus: "Cardio & Core", duration: "40 min" },
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
                    <div className="text-sm text-primary font-medium mb-2">Focus Areas</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Functional movement patterns</li>
                      <li>• Core strength and stability</li>
                      <li>• Mobility and flexibility</li>
                      <li>• Cardiovascular health</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg border border-border">
                    <div className="text-sm text-primary font-medium mb-2">Knee-Friendly Approach</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Low-impact exercises</li>
                      <li>• Proper form emphasis</li>
                      <li>• Gradual progression</li>
                      <li>• Mobility work</li>
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
                <CardTitle className="text-2xl text-foreground">Balanced Vegetarian Nutrition</CardTitle>
                <p className="text-muted-foreground mt-1">1,800 calories • Protein: 25% • Carbs: 50% • Fats: 25%</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Daily Meal Examples</h3>
                <div className="space-y-3">
                  {[
                    { meal: "Breakfast", example: "Tofu scramble with vegetables and whole grain toast" },
                    { meal: "Lunch", example: "Lentil soup with mixed green salad" },
                    { meal: "Dinner", example: "Chickpea curry with brown rice and vegetables" },
                    { meal: "Snacks", example: "Mixed nuts, hummus with vegetables, protein smoothie" },
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
                    <div className="text-sm text-secondary font-medium mb-2">Vegetarian Focus</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Plant-based protein sources</li>
                      <li>• Whole food emphasis</li>
                      <li>• Balanced macronutrients</li>
                      <li>• Anti-inflammatory foods</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg border border-border">
                    <div className="text-sm text-secondary font-medium mb-2">Active Lifestyle Support</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Adequate energy intake</li>
                      <li>• Recovery nutrition</li>
                      <li>• Hydration focus</li>
                      <li>• Joint health support</li>
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

export default ElenaProgram; 