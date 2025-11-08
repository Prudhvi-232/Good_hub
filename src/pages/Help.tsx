import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Zap, Heart, Building2 } from "lucide-react";

const Help = () => {
  const missions = [
    { title: "Feed stray animals", points: 50, difficulty: "Easy", icon: Heart, description: "Provide food to stray dogs or cats in your area" },
    { title: "Teach underprivileged kids", points: 150, difficulty: "Medium", icon: Zap, description: "Spend 2 hours teaching any subject to kids in need" },
    { title: "Organize blood drive", points: 250, difficulty: "Hard", icon: Building2, description: "Coordinate a blood donation camp in your community" },
  ];

  const organizations = [
    { name: "Red Cross Society", category: "Healthcare", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&auto=format&fit=crop" },
    { name: "Feeding America", category: "Food Bank", image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=400&auto=format&fit=crop" },
    { name: "Habitat for Humanity", category: "Housing", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&auto=format&fit=crop" },
  ];

  const helpRequests = [
    { author: "Local Shelter", need: "Need volunteers for weekend meal service", urgency: "High", image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=400&auto=format&fit=crop" },
    { author: "Community Center", need: "Looking for books and educational materials", urgency: "Medium", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Help & Donate</h1>
            <p className="text-muted-foreground">Make a difference in your community</p>
          </div>
          <Button className="gap-2 bg-gradient-primary">
            <Plus className="h-4 w-4" />
            Post Help Request
          </Button>
        </div>

        <Tabs defaultValue="missions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="missions">Missions</TabsTrigger>
            <TabsTrigger value="requests">Help Requests</TabsTrigger>
            <TabsTrigger value="organizations">Organizations</TabsTrigger>
          </TabsList>

          <TabsContent value="missions" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {missions.map((mission, i) => {
                const Icon = mission.icon;
                return (
                  <Card key={i} className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="h-32 bg-gradient-primary" />
                    <div className="p-4">
                      <div className="mb-3 flex items-start justify-between">
                        <Icon className="h-6 w-6 text-primary" />
                        <Badge
                          variant={
                            mission.difficulty === "Easy"
                              ? "default"
                              : mission.difficulty === "Medium"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {mission.difficulty}
                        </Badge>
                      </div>
                      <h3 className="mb-2 font-semibold text-card-foreground">{mission.title}</h3>
                      <p className="mb-4 text-sm text-muted-foreground">{mission.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary">+{mission.points} points</span>
                        <Button size="sm">Accept</Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="requests" className="space-y-4">
            {helpRequests.map((request, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="flex flex-col gap-4 p-4 md:flex-row">
                  <img src={request.image} alt={request.need} className="h-48 w-full rounded-lg object-cover md:w-48" />
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <h3 className="font-semibold text-card-foreground">{request.author}</h3>
                      <Badge variant={request.urgency === "High" ? "destructive" : "secondary"}>
                        {request.urgency} Priority
                      </Badge>
                    </div>
                    <p className="mb-4 text-muted-foreground">{request.need}</p>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="organizations" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {organizations.map((org, i) => (
                <Card key={i} className="overflow-hidden transition-all hover:shadow-lg">
                  <img src={org.image} alt={org.name} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <Badge className="mb-2" variant="outline">
                      {org.category}
                    </Badge>
                    <h3 className="mb-3 font-semibold text-card-foreground">{org.name}</h3>
                    <Button className="w-full" variant="outline">
                      Donate
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Help;
