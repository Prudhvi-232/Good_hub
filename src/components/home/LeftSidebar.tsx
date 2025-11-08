import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const LeftSidebar = () => {
  return (
    <div className="space-y-4">
      {/* Profile Card */}
      <Card className="overflow-hidden">
        <div className="h-16 bg-gradient-primary" />
        <div className="px-4 pb-4">
          <Avatar className="relative -mt-8 h-16 w-16 border-4 border-card">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h3 className="mt-2 font-semibold text-card-foreground">John Doe</h3>
          <p className="text-sm text-muted-foreground">Community Helper</p>
          <div className="mt-4 flex items-center justify-between text-sm">
            <div>
              <p className="font-semibold text-card-foreground">1,247</p>
              <p className="text-muted-foreground">Points</p>
            </div>
            <div>
              <p className="font-semibold text-card-foreground">23</p>
              <p className="text-muted-foreground">Missions</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Donation History */}
      <Card className="p-4">
        <h3 className="mb-3 font-semibold text-card-foreground">Recent Help</h3>
        <div className="space-y-3">
          {[
            { action: "Fed a dog", points: 50, badge: "Easy" },
            { action: "Donated clothes", points: 100, badge: "Medium" },
            { action: "Organized food drive", points: 200, badge: "Hard" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-card-foreground">{item.action}</p>
                <p className="text-xs text-muted-foreground">+{item.points} points</p>
              </div>
              <Badge
                variant={
                  item.badge === "Easy"
                    ? "default"
                    : item.badge === "Medium"
                    ? "secondary"
                    : "destructive"
                }
              >
                {item.badge}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default LeftSidebar;
