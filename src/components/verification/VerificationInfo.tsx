import { Card } from "@/components/ui/card";
import { Shield, ShieldCheck, Award, CheckCircle2 } from "lucide-react";

const VerificationInfo = () => {
  const levels = [
    {
      icon: CheckCircle2,
      title: "Basic Verified",
      color: "text-info",
      bgColor: "bg-info/10",
      description: "Organization identity verified through email and phone",
      requirements: ["Valid email address", "Phone number verification", "Organization name"],
    },
    {
      icon: ShieldCheck,
      title: "KYC Verified",
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Complete KYC verification with government documents",
      requirements: [
        "PAN card of organization",
        "Address proof documents",
        "Registration certificate",
        "Bank account details",
      ],
    },
    {
      icon: Award,
      title: "80G Registered",
      color: "text-accent",
      bgColor: "bg-accent/10",
      description: "Government approved tax-exempt organization under Section 80G",
      requirements: [
        "80G registration certificate",
        "Valid for tax deductions",
        "Annual audit compliance",
        "Government database verified",
      ],
    },
  ];

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Verification Levels</h2>
        <p className="text-muted-foreground">
          Understanding trust and verification on GoodeHub
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {levels.map((level, i) => {
          const Icon = level.icon;
          return (
            <Card key={i} className="p-6">
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${level.bgColor}`}
              >
                <Icon className={`h-6 w-6 ${level.color}`} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">{level.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{level.description}</p>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-card-foreground">Requirements:</p>
                <ul className="space-y-1">
                  {level.requirements.map((req, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-0.5 text-accent">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="border-accent/50 bg-accent/5 p-6">
        <div className="flex items-start gap-4">
          <Shield className="h-6 w-6 flex-shrink-0 text-accent" />
          <div>
            <h3 className="mb-2 font-semibold text-card-foreground">
              Why Verification Matters
            </h3>
            <p className="text-sm text-muted-foreground">
              Verification ensures transparency and builds trust in the charitable ecosystem.
              80G registered organizations allow donors to claim tax deductions, while KYC
              verification ensures authenticity. Always donate to verified organizations for
              maximum impact and tax benefits.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VerificationInfo;
