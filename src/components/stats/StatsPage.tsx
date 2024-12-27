import React from "react";
import PlayerStats from "./PlayerStats";

const StatsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-[1512px] mx-auto space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Player Statistics
          </h1>
          <p className="text-gray-500">
            View detailed player performance metrics
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6">
          <PlayerStats />
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
