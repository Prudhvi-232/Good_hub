import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp } from "lucide-react";

const RightSidebar = () => {
  return (
    <div className="space-y-4">
      {/* Monthly Leaderboard */}
      <Card className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-secondary" />
          <h3 className="font-semibold text-card-foreground">Monthly Top Helpers</h3>
        </div>
        <div className="space-y-3">
          {[
            { name: "Sarah Johnson", points: 2540, avatar: "seed1" },
            { name: "Mike Chen", points: 2120, avatar: "seed2" },
            { name: "Emily Davis", points: 1890, avatar: "seed3" },
          ].map((user, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-lg font-bold text-primary">{i + 1}</span>
              <Avatar className="h-10 w-10">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium text-card-foreground">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.points} points</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Opportunities */}
      <Card className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-accent" />
          <h3 className="font-semibold text-card-foreground">Verified Opportunities</h3>
        </div>
        <div className="space-y-3">
          {[
            { task: "Sponsor Education (₹25,000)", points: 500, difficulty: "80G Eligible" },
            { task: "Healthcare Support Fund", points: 400, difficulty: "Tax Benefit" },
            { task: "Community Development", points: 350, difficulty: "Verified NGO" },
          ].map((task, i) => (
            <div key={i} className="rounded-lg border border-border p-3 transition-all hover:border-primary">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-card-foreground">{task.task}</p>
                  <p className="mt-1 text-xs text-muted-foreground">+{task.points} points</p>
                </div>
                <Badge variant="outline">{task.difficulty}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default RightSidebar;
