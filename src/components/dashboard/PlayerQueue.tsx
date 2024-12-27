import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, GripVertical } from "lucide-react";

interface Player {
  id: string;
  name: string;
  avatarUrl?: string;
  waitTime: number;
  position: number;
}

interface PlayerQueueProps {
  players?: Player[];
  onDragEnd?: (result: { source: number; destination: number }) => void;
}

const PlayerQueue = ({
  players = [
    { id: "1", name: "John Doe", waitTime: 10, position: 1 },
    { id: "2", name: "Jane Smith", waitTime: 8, position: 2 },
    { id: "3", name: "Mike Johnson", waitTime: 5, position: 3 },
    { id: "4", name: "Sarah Wilson", waitTime: 5, position: 4 },
    { id: "5", name: "Tom Brown", waitTime: 3, position: 5 },
    { id: "6", name: "Emma Davis", waitTime: 2, position: 6 },
  ],
  onDragEnd = () => {},
}: PlayerQueueProps) => {
  return (
    <Card className="w-[400px] h-[500px] bg-white">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Player Queue</h3>
          <Badge variant="secondary" className="px-3">
            {players.length} Players
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[420px] w-full pr-4">
          <div className="space-y-4">
            {players.map((player) => (
              <div
                key={player.id}
                className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg cursor-move"
                draggable="true"
              >
                <div className="flex items-center gap-3">
                  <GripVertical className="h-5 w-5 text-muted-foreground" />
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${player.id}`}
                      alt={player.name}
                    />
                    <AvatarFallback>
                      {player.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{player.name}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{player.waitTime} min wait</span>
                    </div>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="w-6 h-6 flex items-center justify-center rounded-full"
                >
                  {player.position}
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default PlayerQueue;
