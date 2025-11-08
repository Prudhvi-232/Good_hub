import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeedPostProps {
  author: string;
  avatar: string;
  timestamp: string;
  helpAction: string;
  description: string;
  points: number;
  likes: number;
  comments: number;
  image?: string;
  badge?: string;
}

const FeedPost = ({
  author,
  avatar,
  timestamp,
  helpAction,
  description,
  points,
  likes,
  comments,
  image,
  badge,
}: FeedPostProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      {/* Post Header */}
      <div className="flex items-center gap-3 p-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-card-foreground">{author}</h4>
            {badge && (
              <Badge variant="secondary" className="gap-1">
                <Award className="h-3 w-3" />
                {badge}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{timestamp}</p>
        </div>
        <Badge className="bg-gradient-success">{points} points</Badge>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-4">
        <h3 className="mb-2 font-semibold text-card-foreground">{helpAction}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {/* Post Image */}
      {image && (
        <div className="relative h-64 w-full overflow-hidden">
          <img src={image} alt={helpAction} className="h-full w-full object-cover" />
        </div>
      )}

      {/* Post Actions */}
      <div className="flex items-center gap-4 border-t border-border p-4">
        <Button variant="ghost" size="sm" className="gap-2">
          <Heart className="h-4 w-4" />
          <span>{likes}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <MessageCircle className="h-4 w-4" />
          <span>{comments}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </div>
    </Card>
  );
};

export default FeedPost;
