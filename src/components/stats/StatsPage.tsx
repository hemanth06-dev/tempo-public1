import React from "react";
import PlayerStats from "./PlayerStats";
import Navigation from "../ui/navigation";
import { Card, CardContent } from "../ui/card";
import { Trophy, Activity, Clock, TrendingUp } from "lucide-react";

const StatsPage = () => {
  const overallStats = [
    {
      label: "Total Matches",
      value: "342",
      change: "+12% vs last week",
      icon: Trophy,
    },
    {
      label: "Active Players",
      value: "86",
      change: "+5% vs last week",
      icon: Activity,
    },
    {
      label: "Avg Wait Time",
      value: "14 min",
      change: "-2 min vs last week",
      icon: Clock,
    },
    {
      label: "Court Utilization",
      value: "78%",
      change: "+8% vs last week",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <main className="pt-20 p-6">
        <div className="max-w-[1512px] mx-auto space-y-6">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Player Statistics
            </h1>
            <p className="text-gray-500">
              View detailed player performance metrics
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {overallStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <p className="text-xs text-muted-foreground mt-1">
                        {stat.change}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-6">
            <PlayerStats />
          </div>
        </div>
      </main>
    </div>
  );
};

export default StatsPage;
