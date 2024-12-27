import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timer, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Player {
  id: string;
  name: string;
  avatarUrl?: string;
}

interface CourtCardProps {
  courtNumber: number;
  isOccupied?: boolean;
  currentPlayers?: Player[];
  matchStartTime?: Date;
}

const CourtCard = ({
  courtNumber = 1,
  isOccupied = false,
  currentPlayers = [
    { id: "1", name: "Player 1" },
    { id: "2", name: "Player 2" },
    { id: "3", name: "Player 3" },
    { id: "4", name: "Player 4" },
  ],
  matchStartTime = new Date(),
}: CourtCardProps) => {
  const getElapsedTime = () => {
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - matchStartTime.getTime()) / 60000,
    );
    return `${diffInMinutes} min`;
  };

  return (
    <Card className="w-[300px] h-[180px] bg-white">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Court {courtNumber}</h3>
          <Badge
            variant={isOccupied ? "destructive" : "success"}
            className="px-3"
          >
            {isOccupied ? "Occupied" : "Available"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {isOccupied && (
          <>
            <div className="flex items-center gap-2 mb-3">
              <Timer className="h-4 w-4" />
              <span className="text-sm text-muted-foreground">
                {getElapsedTime()}
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">Current Players</span>
              </div>
              <div className="flex gap-2">
                {currentPlayers.map((player) => (
                  <Avatar key={player.id} className="h-8 w-8">
                    <AvatarImage
                      src={
                        player.avatarUrl ||
                        `https://api.dicebear.com/7.x/avataaars/svg?seed=${player.id}`
                      }
                      alt={player.name}
                    />
                    <AvatarFallback>
                      {player.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </>
        )}
        {!isOccupied && (
          <div className="h-[100px] flex items-center justify-center text-muted-foreground">
            Ready for next match
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CourtCard;
