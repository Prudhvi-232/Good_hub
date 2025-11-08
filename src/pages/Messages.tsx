import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Messages = () => {
  const conversations = [
    { name: "Sarah Johnson", avatar: "sarah", lastMessage: "Thanks for organizing the food drive!", time: "2h ago", unread: 2 },
    { name: "Mike Chen", avatar: "mike", lastMessage: "Let's plan the next teaching session", time: "5h ago", unread: 0 },
    { name: "Emily Davis", avatar: "emily", lastMessage: "Great work on the blood drive!", time: "1d ago", unread: 1 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h1 className="mb-6 text-3xl font-bold text-foreground">Messages</h1>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Conversations List */}
          <Card className="p-4">
            <h2 className="mb-4 font-semibold text-card-foreground">Conversations</h2>
            <div className="space-y-3">
              {conversations.map((conv, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-muted cursor-pointer"
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${conv.avatar}`} />
                      <AvatarFallback>{conv.name[0]}</AvatarFallback>
                    </Avatar>
                    {conv.unread > 0 && (
                      <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                        {conv.unread}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h3 className="font-semibold text-card-foreground">{conv.name}</h3>
                    <p className="truncate text-sm text-muted-foreground">{conv.lastMessage}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{conv.time}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2 p-4 flex flex-col h-[600px]">
            <div className="border-b border-border pb-4 mb-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-card-foreground">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Active now</p>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto mb-4">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div className="max-w-[70%] rounded-lg bg-muted p-3">
                  <p className="text-sm text-card-foreground">Thanks for organizing the food drive!</p>
                  <span className="text-xs text-muted-foreground">2h ago</span>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="max-w-[70%] rounded-lg bg-primary p-3">
                  <p className="text-sm text-white">Happy to help! Let's plan the next one.</p>
                  <span className="text-xs text-primary-foreground/80">1h ago</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Input placeholder="Type a message..." className="flex-1" />
              <Button size="icon" className="bg-gradient-primary">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;
