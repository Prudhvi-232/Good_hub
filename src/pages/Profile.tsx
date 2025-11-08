import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Award, Heart } from "lucide-react";
import VerificationBadge from "@/components/verification/VerificationBadge";

const Profile = () => {
  const achievements = [
    { title: "Platinum Donor", description: "₹5L+ verified contributions", icon: Award },
    { title: "80G Champion", description: "15 tax-eligible donations", icon: Award },
    { title: "Impact Maker", description: "Helped 500+ beneficiaries", icon: Heart },
  ];

  const recentActivity = [
    { action: "₹2,50,000 Donation to Old Age Home (80G Verified)", points: 2500, date: "2 days ago" },
    { action: "Sponsored Education Program - ₹1,00,000", points: 1000, date: "1 week ago" },
    { action: "Medical Equipment Donation - ₹75,000", points: 750, date: "2 weeks ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-6">
        {/* Profile Header */}
        <Card className="mb-6 overflow-hidden">
          <div className="h-32 bg-gradient-primary" />
          <div className="px-6 pb-6">
            <Avatar className="relative -mt-16 h-32 w-32 border-8 border-card">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="mt-4 flex items-start justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-card-foreground">John Doe</h1>
                  <VerificationBadge level="kyc" size="md" />
                </div>
                <p className="text-muted-foreground">Verified Individual Donor</p>
                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined March 2024</span>
                  </div>
                </div>
              </div>
              <Button variant="outline">Edit Profile</Button>
            </div>
          </div>
        </Card>

          {/* Stats */}
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <Card className="p-6 text-center">
            <p className="text-3xl font-bold text-primary">₹8,50,000</p>
            <p className="text-sm text-muted-foreground">Total Contributions</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-3xl font-bold text-secondary">15</p>
            <p className="text-sm text-muted-foreground">80G Verified Donations</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-3xl font-bold text-accent">₹2,55,000</p>
            <p className="text-sm text-muted-foreground">Tax Benefit Claimed</p>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="mb-6 p-6">
          <h2 className="mb-4 text-xl font-semibold text-card-foreground">Achievements</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {achievements.map((achievement, i) => {
              const Icon = achievement.icon;
              return (
                <div key={i} className="flex flex-col items-center rounded-lg border border-border p-4 text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h2 className="mb-4 text-xl font-semibold text-card-foreground">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border p-4">
                <div>
                  <h3 className="font-semibold text-card-foreground">{activity.action}</h3>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </div>
                <Badge className="bg-gradient-success">+{activity.points} points</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
