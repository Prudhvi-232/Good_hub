import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation } from "lucide-react";

const Location = () => {
  const locations = [
    { name: "City Food Bank", type: "Food Distribution", address: "123 Main St", urgency: "High", distance: "0.8 km" },
    { name: "Community Shelter", type: "Shelter", address: "456 Oak Ave", urgency: "Medium", distance: "1.2 km" },
    { name: "Local Hospital", type: "Healthcare", address: "789 Health Rd", urgency: "Low", distance: "2.5 km" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground">Help Locations</h1>
          <p className="text-muted-foreground">Find organizations and areas that need help near you</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Map Placeholder */}
          <Card className="lg:col-span-2">
            <div className="relative h-[500px] overflow-hidden rounded-lg bg-muted">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <p className="text-lg font-semibold text-card-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Map view would be integrated here</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Locations List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Nearby Locations</h2>
            {locations.map((location, i) => (
              <Card key={i} className="p-4">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-card-foreground">{location.name}</h3>
                    <p className="text-sm text-muted-foreground">{location.type}</p>
                  </div>
                  <Badge variant={location.urgency === "High" ? "destructive" : location.urgency === "Medium" ? "secondary" : "outline"}>
                    {location.urgency}
                  </Badge>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">{location.address}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{location.distance} away</span>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Navigation className="h-4 w-4" />
                    Directions
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
