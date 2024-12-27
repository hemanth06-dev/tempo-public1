import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Clock, Activity } from "lucide-react";

interface PlayerStats {
  id: string;
  name: string;
  avatarUrl?: string;
  gamesPlayed: number;
  winRate: number;
  averageWaitTime: number;
  rank: number;
}

interface PlayerStatsProps {
  players?: PlayerStats[];
}

const PlayerStats = ({
  players = [
    {
      id: "1",
      name: "John Doe",
      gamesPlayed: 45,
      winRate: 68,
      averageWaitTime: 12,
      rank: 1,
    },
    {
      id: "2",
      name: "Jane Smith",
      gamesPlayed: 38,
      winRate: 65,
      averageWaitTime: 15,
      rank: 2,
    },
    {
      id: "3",
      name: "Mike Johnson",
      gamesPlayed: 42,
      winRate: 55,
      averageWaitTime: 10,
      rank: 3,
    },
  ],
}: PlayerStatsProps) => {
  return (
    <Card className="w-full bg-white">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Player Statistics</h3>
          <Badge variant="outline">{players.length} Players</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full pr-4">
          <div className="space-y-4">
            {players.map((player) => (
              <div
                key={player.id}
                className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
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
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{player.name}</p>
                      <Badge variant="secondary" className="h-6">
                        #{player.rank}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Trophy className="h-4 w-4" />
                        <span>{player.winRate}% wins</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Activity className="h-4 w-4" />
                        <span>{player.gamesPlayed} games</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>~{player.averageWaitTime}min wait</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default PlayerStats;
