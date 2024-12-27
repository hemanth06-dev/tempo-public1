import React from "react";
import CourtCard from "./CourtCard";

interface Court {
  id: number;
  isOccupied: boolean;
  currentPlayers?: {
    id: string;
    name: string;
    avatarUrl?: string;
  }[];
  matchStartTime?: Date;
}

interface CourtStatusGridProps {
  courts?: Court[];
}

const CourtStatusGrid = ({
  courts = [
    {
      id: 1,
      isOccupied: true,
      currentPlayers: [
        { id: "1", name: "Player 1" },
        { id: "2", name: "Player 2" },
        { id: "3", name: "Player 3" },
        { id: "4", name: "Player 4" },
      ],
      matchStartTime: new Date(Date.now() - 15 * 60000), // 15 minutes ago
    },
    {
      id: 2,
      isOccupied: false,
    },
    {
      id: 3,
      isOccupied: true,
      currentPlayers: [
        { id: "5", name: "Player 5" },
        { id: "6", name: "Player 6" },
        { id: "7", name: "Player 7" },
        { id: "8", name: "Player 8" },
      ],
      matchStartTime: new Date(Date.now() - 5 * 60000), // 5 minutes ago
    },
    {
      id: 4,
      isOccupied: false,
    },
    {
      id: 5,
      isOccupied: false,
    },
    {
      id: 6,
      isOccupied: true,
      currentPlayers: [
        { id: "9", name: "Player 9" },
        { id: "10", name: "Player 10" },
        { id: "11", name: "Player 11" },
        { id: "12", name: "Player 12" },
      ],
      matchStartTime: new Date(Date.now() - 25 * 60000), // 25 minutes ago
    },
  ],
}: CourtStatusGridProps) => {
  return (
    <div className="w-full h-full bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {courts.map((court) => (
          <CourtCard
            key={court.id}
            courtNumber={court.id}
            isOccupied={court.isOccupied}
            currentPlayers={court.currentPlayers}
            matchStartTime={court.matchStartTime}
          />
        ))}
      </div>
    </div>
  );
};

export default CourtStatusGrid;
