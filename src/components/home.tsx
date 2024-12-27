import React from "react";
import CourtStatusGrid from "./dashboard/CourtStatusGrid";
import PlayerQueue from "./dashboard/PlayerQueue";
import ActivePlayersList from "./dashboard/ActivePlayersList";
import Navigation from "./ui/navigation";
import { Card, CardContent } from "./ui/card";
import {
  Users,
  Clock,
  Trophy,
  ArrowRight,
  Activity,
  CalendarDays,
} from "lucide-react";
import { Button } from "./ui/button";

const Home = () => {
  const stats = [
    {
      label: "Active Players",
      value: "24",
      icon: Users,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      label: "Avg. Wait Time",
      value: "12 min",
      icon: Clock,
      color: "bg-green-500/10 text-green-500",
    },
    {
      label: "Matches Today",
      value: "45",
      icon: Trophy,
      color: "bg-yellow-500/10 text-yellow-500",
    },
    {
      label: "Court Usage",
      value: "85%",
      icon: Activity,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      label: "Peak Hours",
      value: "6-8 PM",
      icon: CalendarDays,
      color: "bg-pink-500/10 text-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-20 p-6">
        <div className="max-w-[1512px] mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
            <header>
              <h1 className="text-4xl font-bold text-gray-900">
                Welcome to Badminton Hub
              </h1>
              <p className="text-lg text-gray-500 mt-2">
                Real-time court management and player tracking
              </p>
            </header>
            <Button className="self-start" size="lg">
              Check In <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="bg-white hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </p>
                      <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-8 space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Court Status</h2>
                  <Button variant="outline" size="sm">
                    View All Courts
                  </Button>
                </div>
                <CourtStatusGrid />
              </div>
            </div>

            <div className="xl:col-span-4 space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Player Queue</h2>
                  <Button variant="outline" size="sm">
                    Manage Queue
                  </Button>
                </div>
                <PlayerQueue />
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Active Players</h2>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                <ActivePlayersList />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
