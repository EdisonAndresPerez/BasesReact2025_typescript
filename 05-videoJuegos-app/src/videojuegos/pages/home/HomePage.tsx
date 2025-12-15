import { Heart, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";
import StatsVideoGames from "@/videojuegos/components/StatsVideoGames";
import VideoJuegoGrid from "@/videojuegos/components/VideoJuegoGrid";
import { useState } from "react";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "action" | "rpg"
  >("all");

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Video Games Universe"
          description="Discover, explore, and manage your favorite video games"
        />

        {/* Stats Dashboard */}
        <StatsVideoGames />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger onClick={() => setActiveTab("all")} value="all">
              All Games (16)
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab("favorites")}
              value="favorites"
              className="flex items-center gap-2"
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab("action")} value="action">
              Action (6)
            </TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab("rpg")} value="rpg">
              RPG (8)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/*mostrar todos los personajes*/}
            <VideoJuegoGrid />
          </TabsContent>

          <TabsContent value="favorites">
            {/*mostrar todos los personajes en favoritos*/}
            <h1>Favorites!</h1>
          </TabsContent>

          <TabsContent value="action">
            {/*mostrar los juegos de accion*/}
            <h1>Action video games!</h1>
          </TabsContent>

          <TabsContent value="rpg">
            {/*mostrar los juegos rpg*/}
            <h1>RPG video games!</h1>
          </TabsContent>
        </Tabs>

        {/* Game Grid */}

        {/* Pagination */}
        <div className="flex items-center justify-between border-t pt-6">
          <div className="text-sm text-gray-600">
            Page <span className="font-medium">1</span> of{" "}
            <span className="font-medium">3</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="flex gap-1">
              <Button variant="default" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="ghost" size="sm" disabled>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <Button variant="outline" size="sm">
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-sm text-gray-600">Go to page</div>
        </div>
      </>
    </>
  );
};
