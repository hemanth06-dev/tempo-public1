import React from "react";
import CourtStatusGrid from "./dashboard/CourtStatusGrid";
import PlayerQueue from "./dashboard/PlayerQueue";
import ActivePlayersList from "./dashboard/ActivePlayersList";
import Navigation from "./ui/navigation";
import { Card, CardContent } from "./ui/card";
import { Users, Clock, Trophy } from "lucide-react";

const Home = () => {
  const stats = [
    { label: "Active Players", value: "24", icon: Users },
    { label: "Avg. Wait Time", value: "12 min", icon: Clock },
    { label: "Matches Today", value: "45", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <main className="pt-20 p-6">
        <div className="max-w-[1512px] mx-auto space-y-6">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Badminton Courts
            </h1>
            <p className="text-gray-500">Manage courts and player queues</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-white">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </p>
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-8">
              <CourtStatusGrid />
            </div>

            <div className="xl:col-span-4 space-y-6">
              <PlayerQueue />
              <ActivePlayersList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
