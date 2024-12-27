import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Circle, Clock } from "lucide-react";

interface Player {
  id: string;
  name: string;
  avatarUrl?: string;
  status: "playing" | "available" | "away";
  lastCheckIn?: Date;
}

interface ActivePlayersListProps {
  players?: Player[];
}

const ActivePlayersList = ({
  players = [
    { id: "1", name: "John Doe", status: "playing", lastCheckIn: new Date() },
    {
      id: "2",
      name: "Jane Smith",
      status: "available",
      lastCheckIn: new Date(),
    },
    {
      id: "3",
      name: "Mike Johnson",
      status: "away",
      lastCheckIn: new Date(Date.now() - 3600000),
    },
    {
      id: "4",
      name: "Sarah Wilson",
      status: "playing",
      lastCheckIn: new Date(),
    },
    {
      id: "5",
      name: "Tom Brown",
      status: "available",
      lastCheckIn: new Date(),
    },
  ],
}: ActivePlayersListProps) => {
  const getStatusColor = (status: Player["status"]) => {
    switch (status) {
      case "playing":
        return "text-yellow-500";
      case "available":
        return "text-green-500";
      case "away":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusBadge = (status: Player["status"]) => {
    switch (status) {
      case "playing":
        return <Badge variant="warning">Playing</Badge>;
      case "available":
        return <Badge variant="success">Available</Badge>;
      case "away":
        return <Badge variant="secondary">Away</Badge>;
    }
  };

  const getTimeAgo = (date: Date) => {
    const minutes = Math.floor((new Date().getTime() - date.getTime()) / 60000);
    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    return `${Math.floor(minutes / 60)}h ago`;
  };

  return (
    <Card className="w-[400px] h-[500px] bg-white">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Active Players</h3>
          <Badge variant="outline">{players.length} Players</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full pr-4">
          <div className="space-y-4">
            {players.map((player) => (
              <div
                key={player.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
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
                  <div>
                    <p className="font-medium">{player.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Circle
                        className={`h-2 w-2 ${getStatusColor(player.status)}`}
                      />
                      {getStatusBadge(player.status)}
                    </div>
                  </div>
                </div>
                {player.lastCheckIn && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{getTimeAgo(player.lastCheckIn)}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ActivePlayersList;
