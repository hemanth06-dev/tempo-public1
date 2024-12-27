import React from "react";
import CourtStatusGrid from "./dashboard/CourtStatusGrid";
import PlayerQueue from "./dashboard/PlayerQueue";
import ActivePlayersList from "./dashboard/ActivePlayersList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-[1512px] mx-auto space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Badminton Courts</h1>
          <p className="text-gray-500">Manage courts and player queues</p>
        </header>

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
    </div>
  );
};

export default Home;
