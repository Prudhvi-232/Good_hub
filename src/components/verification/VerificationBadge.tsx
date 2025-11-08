import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Shield, ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type VerificationLevel = "none" | "basic" | "kyc" | "80g";

interface VerificationBadgeProps {
  level: VerificationLevel;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

const verificationConfig = {
  none: {
    label: "Unverified",
    icon: Shield,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    description: "Organization not yet verified",
    variant: "outline" as const,
  },
  basic: {
    label: "Basic Verified",
    icon: CheckCircle2,
    color: "text-info",
    bgColor: "bg-info/10",
    description: "Basic identity verification completed",
    variant: "secondary" as const,
  },
  kyc: {
    label: "KYC Verified",
    icon: ShieldCheck,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Complete KYC verification with documents",
    variant: "default" as const,
  },
  "80g": {
    label: "80G Registered",
    icon: Award,
    color: "text-accent",
    bgColor: "bg-accent/10",
    description: "Government registered 80G tax-exempt organization",
    variant: "default" as const,
  },
};

const VerificationBadge = ({
  level,
  size = "md",
  showLabel = true,
  className,
}: VerificationBadgeProps) => {
  const config = verificationConfig[level];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  if (level === "none") return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge
            variant={config.variant}
            className={cn(
              "gap-1.5 cursor-help transition-all hover:scale-105",
              config.bgColor,
              className
            )}
          >
            <Icon className={cn(sizeClasses[size], config.color)} />
            {showLabel && <span className={config.color}>{config.label}</span>}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-semibold">{config.label}</p>
          <p className="text-sm text-muted-foreground">{config.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default VerificationBadge;
