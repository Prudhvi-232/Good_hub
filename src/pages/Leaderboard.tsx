import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

const Leaderboard = () => {
  const topUsers = [
    { rank: 1, name: "Sarah Johnson", points: 2540, missions: 45, avatar: "sarah", badge: "Gold" },
    { rank: 2, name: "Mike Chen", points: 2120, missions: 38, avatar: "mike", badge: "Silver" },
    { rank: 3, name: "Emily Davis", points: 1890, missions: 32, avatar: "emily", badge: "Bronze" },
    { rank: 4, name: "David Wilson", points: 1650, missions: 28, avatar: "david", badge: null },
    { rank: 5, name: "Lisa Anderson", points: 1420, missions: 25, avatar: "lisa", badge: null },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-secondary" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-muted-foreground" />;
    if (rank === 3) return <Award className="h-6 w-6 text-secondary" />;
    return <span className="text-xl font-bold text-muted-foreground">{rank}</span>;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground">Friends Leaderboard</h1>
          <p className="text-muted-foreground">See how your friends are making a difference</p>
        </div>

        <Card className="overflow-hidden">
          <div className="h-32 bg-gradient-primary" />
          <div className="space-y-4 p-6">
            {topUsers.map((user, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-lg border border-border p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex w-12 items-center justify-center">
                  {getRankIcon(user.rank)}
                </div>
                <Avatar className="h-14 w-14">
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-card-foreground">{user.name}</h3>
                    {user.badge && (
                      <Badge
                        className={
                          user.badge === "Gold"
                            ? "bg-gradient-warm"
                            : user.badge === "Silver"
                            ? "bg-muted"
                            : "bg-secondary"
                        }
                      >
                        {user.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{user.missions} missions completed</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{user.points}</p>
                  <p className="text-sm text-muted-foreground">points</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
