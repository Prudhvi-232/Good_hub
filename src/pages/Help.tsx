import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Zap, Heart, Building2 } from "lucide-react";

const Help = () => {
  const missions = [
    { title: "Sponsor Child Education", points: 500, difficulty: "₹25,000", icon: Heart, description: "Fund complete education for one child through verified NGO. 80G tax benefit applicable." },
    { title: "Medical Equipment Donation", points: 800, difficulty: "₹50,000+", icon: Zap, description: "Donate medical equipment to government hospitals. Full tax exemption under Section 80G." },
    { title: "Rural Healthcare Camp", points: 1000, difficulty: "₹1,00,000+", icon: Building2, description: "Sponsor comprehensive healthcare camp for 200+ people. Verified NGO partnership with tax benefits." },
  ];

  const organizations = [
    { name: "Red Cross Society", category: "Healthcare", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&auto=format&fit=crop" },
    { name: "Feeding America", category: "Food Bank", image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=400&auto=format&fit=crop" },
    { name: "Habitat for Humanity", category: "Housing", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&auto=format&fit=crop" },
  ];

  const helpRequests = [
    { author: "Sunshine Old Age Home (80G Verified)", need: "Seeking ₹2,00,000 for medical equipment and monthly supplies for 50 elderly residents", urgency: "High", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&auto=format&fit=crop" },
    { author: "Education For All Trust (Verified NGO)", need: "Need ₹5,00,000 to sponsor education for 100 underprivileged children - Full tax benefit under 80G", urgency: "High", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop" },
    { author: "HealthCare Foundation (80G Registered)", need: "Requesting ₹3,00,000 for organizing free medical camps in 5 rural villages", urgency: "Medium", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&auto=format&fit=crop" },
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
