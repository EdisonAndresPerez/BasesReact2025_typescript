import { Button } from "@/components/ui/button";
import {  Gamepad2, Heart, Trophy, Users } from "lucide-react";
import StatVideoGames from "./StatVideoGames";

const StatsVideoGames = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <StatVideoGames
        title="Total Games"
        value={16}
        icon={<Users className="h-4 w-4" />}
      >
        <div className="flex gap-1 mt-2">
          <Button variant="secondary" className="text-xs">10 Active</Button>
          <Button variant="destructive" className="text-xs">4 Legacy</Button>
        </div>
      </StatVideoGames>

      <StatVideoGames
        title="Favorites"
        value={3}
        description="18.8% of total"
        icon={<Heart className="h-4 w-4" />}
        valueClassName="text-red-600"
      />

      <StatVideoGames
        title="Best Gameplay"
        icon={<Gamepad2 className="h-4 w-4" />}
      >
        <div className="text-lg font-bold">The Witcher 3</div>
        <p className="text-xs text-muted-foreground">Gameplay: 10/10</p>
      </StatVideoGames>

      <StatVideoGames
        title="Best Story"
        icon={<Trophy className="h-4 w-4" />}
      >
        <div className="text-lg font-bold">The Last of Us</div>
        <p className="text-xs text-muted-foreground">Story: 10/10</p>
      </StatVideoGames>
    </div>
  );
};

export default StatsVideoGames;
