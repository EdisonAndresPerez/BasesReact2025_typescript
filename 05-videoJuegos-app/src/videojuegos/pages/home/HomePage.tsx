import {
  Filter,
  Heart,
  Gamepad2,
  Eye,
  Palette,
  BookOpen,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";
import StatsVideoGames from "@/videojuegos/components/StatsVideoGames";
import SearchControls from "../search/ui/SearchControls";

export const HomePage = () => {
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

        {/* Controls */}

        {/* Advanced Filters */}

        {/* Tabs */}
        <Tabs value="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Games (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="action">Action (6)</TabsTrigger>
            <TabsTrigger value="rpg">RPG (8)</TabsTrigger>
          </TabsList>
        </Tabs>


        {/* Game Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Game Card 1 - The Witcher 3 */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/witcher-3-cover.png"
                alt="The Witcher 3"
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />

              {/* Status indicator */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <Badge
                  variant="secondary"
                  className="text-xs bg-white/90 text-gray-700"
                >
                  Active
                </Badge>
              </div>

              {/* Platform badge */}
              <Badge className="absolute top-3 right-3 text-xs bg-gray-600 text-white">
                Multi-Platform
              </Badge>

              {/* Favorite button */}
              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
              >
                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              </Button>

              {/* View details button */}
              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Eye className="h-4 w-4 text-gray-600" />
              </Button>
            </div>

            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-bold text-lg leading-tight">
                    The Witcher 3
                  </h3>
                  <p className="text-sm text-gray-600">CD Projekt Red</p>
                </div>
                <Badge className="text-xs bg-purple-100 text-purple-800 border-purple-200">
                  RPG
                </Badge>
              </div>
              <Badge variant="outline" className="w-fit text-xs">
                The Witcher
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 line-clamp-2">
                Epic open-world RPG following Geralt of Rivia on his quest to
                find his adopted daughter.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Gamepad2 className="h-3 w-3 text-orange-500" />
                    <span className="text-xs font-medium">Gameplay</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Palette className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium">Graphics</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium">Story</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <RotateCcw className="h-3 w-3 text-purple-500" />
                    <span className="text-xs font-medium">Replayability</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Open World
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Choice-Based
                  </Badge>
                  <Badge variant="outline" className="text-xs bg-gray-100">
                    +5 more
                  </Badge>
                </div>
              </div>

              <div className="text-xs text-gray-500 pt-2 border-t">
                Released: 2015
              </div>
            </CardContent>
          </Card>

          {/* Game Card 2 - The Last of Us */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/the-last-of-us-game-cover.jpg"
                alt="The Last of Us"
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />

              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <Badge
                  variant="secondary"
                  className="text-xs bg-white/90 text-gray-700"
                >
                  Active
                </Badge>
              </div>

              <Badge className="absolute top-3 right-3 text-xs bg-blue-600 text-white">
                PlayStation
              </Badge>

              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
              >
                <Heart className="h-4 w-4 text-gray-600" />
              </Button>

              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Eye className="h-4 w-4 text-gray-600" />
              </Button>
            </div>

            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-bold text-lg leading-tight">
                    The Last of Us
                  </h3>
                  <p className="text-sm text-gray-600">Naughty Dog</p>
                </div>
                <Badge className="text-xs bg-green-100 text-green-800 border-green-200">
                  Adventure
                </Badge>
              </div>
              <Badge variant="outline" className="w-fit text-xs">
                The Last of Us
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 line-clamp-2">
                Post-apocalyptic action-adventure following Joel and Ellie's
                journey across a devastated America.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Gamepad2 className="h-3 w-3 text-orange-500" />
                    <span className="text-xs font-medium">Gameplay</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Palette className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium">Graphics</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium">Story</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <RotateCcw className="h-3 w-3 text-purple-500" />
                    <span className="text-xs font-medium">Replayability</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Story-Driven
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Stealth
                  </Badge>
                  <Badge variant="outline" className="text-xs bg-gray-100">
                    +4 more
                  </Badge>
                </div>
              </div>

              <div className="text-xs text-gray-500 pt-2 border-t">
                Released: 2013
              </div>
            </CardContent>
          </Card>

          {/* Game Card 3 - Red Dead Redemption 2 */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/generic-western-game-cover.png"
                alt="Red Dead Redemption 2"
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />

              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <Badge
                  variant="secondary"
                  className="text-xs bg-white/90 text-gray-700"
                >
                  Active
                </Badge>
              </div>

              <Badge className="absolute top-3 right-3 text-xs bg-gray-600 text-white">
                Multi-Platform
              </Badge>

              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
              >
                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              </Button>

              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Eye className="h-4 w-4 text-gray-600" />
              </Button>
            </div>

            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-bold text-lg leading-tight">
                    Red Dead Redemption 2
                  </h3>
                  <p className="text-sm text-gray-600">Rockstar Games</p>
                </div>
                <Badge className="text-xs bg-red-100 text-red-800 border-red-200">
                  Action
                </Badge>
              </div>
              <Badge variant="outline" className="w-fit text-xs">
                Red Dead
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 line-clamp-2">
                Epic tale of life in America's unforgiving heartland, following
                Arthur Morgan and the Van der Linde gang.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Gamepad2 className="h-3 w-3 text-orange-500" />
                    <span className="text-xs font-medium">Gameplay</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Palette className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium">Graphics</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium">Story</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <RotateCcw className="h-3 w-3 text-purple-500" />
                    <span className="text-xs font-medium">Replayability</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Open World
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Western
                  </Badge>
                  <Badge variant="outline" className="text-xs bg-gray-100">
                    +6 more
                  </Badge>
                </div>
              </div>

              <div className="text-xs text-gray-500 pt-2 border-t">
                Released: 2018
              </div>
            </CardContent>
          </Card>

          {/* Game Card 4 - God of War */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/god-of-war-2018-game-cover.jpg"
                alt="God of War"
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />

              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <Badge
                  variant="secondary"
                  className="text-xs bg-white/90 text-gray-700"
                >
                  Active
                </Badge>
              </div>

              <Badge className="absolute top-3 right-3 text-xs bg-blue-600 text-white">
                PlayStation
              </Badge>

              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
              >
                <Heart className="h-4 w-4 text-gray-600" />
              </Button>

              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Eye className="h-4 w-4 text-gray-600" />
              </Button>
            </div>

            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-bold text-lg leading-tight">
                    God of War
                  </h3>
                  <p className="text-sm text-gray-600">Santa Monica Studio</p>
                </div>
                <Badge className="text-xs bg-red-100 text-red-800 border-red-200">
                  Action
                </Badge>
              </div>
              <Badge variant="outline" className="w-fit text-xs">
                God of War
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 line-clamp-2">
                Kratos and his son Atreus embark on a journey through Norse
                mythology in this reinvention of the series.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Gamepad2 className="h-3 w-3 text-orange-500" />
                    <span className="text-xs font-medium">Gameplay</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Palette className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium">Graphics</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium">Story</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <RotateCcw className="h-3 w-3 text-purple-500" />
                    <span className="text-xs font-medium">Replayability</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Combat
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Mythology
                  </Badge>
                  <Badge variant="outline" className="text-xs bg-gray-100">
                    +5 more
                  </Badge>
                </div>
              </div>

              <div className="text-xs text-gray-500 pt-2 border-t">
                Released: 2018
              </div>
            </CardContent>
          </Card>

          {/* Game Card 5 - Elden Ring */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/elden-ring-inspired-cover.png"
                alt="Elden Ring"
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />

              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <Badge
                  variant="secondary"
                  className="text-xs bg-white/90 text-gray-700"
                >
                  Active
                </Badge>
              </div>

              <Badge className="absolute top-3 right-3 text-xs bg-gray-600 text-white">
                Multi-Platform
              </Badge>

              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
              >
                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              </Button>

              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Eye className="h-4 w-4 text-gray-600" />
              </Button>
            </div>

            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-bold text-lg leading-tight">
                    Elden Ring
                  </h3>
                  <p className="text-sm text-gray-600">FromSoftware</p>
                </div>
                <Badge className="text-xs bg-purple-100 text-purple-800 border-purple-200">
                  RPG
                </Badge>
              </div>
              <Badge variant="outline" className="w-fit text-xs">
                Elden Ring
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 line-clamp-2">
                Fantasy action RPG set in the Lands Between, featuring
                challenging combat and vast exploration.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Gamepad2 className="h-3 w-3 text-orange-500" />
                    <span className="text-xs font-medium">Gameplay</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Palette className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium">Graphics</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium">Story</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <RotateCcw className="h-3 w-3 text-purple-500" />
                    <span className="text-xs font-medium">Replayability</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Open World
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Souls-like
                  </Badge>
                  <Badge variant="outline" className="text-xs bg-gray-100">
                    +7 more
                  </Badge>
                </div>
              </div>

              <div className="text-xs text-gray-500 pt-2 border-t">
                Released: 2022
              </div>
            </CardContent>
          </Card>

          {/* Game Card 6 - Hades */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/hades-game-cover.jpg"
                alt="Hades"
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />

              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <Badge
                  variant="secondary"
                  className="text-xs bg-white/90 text-gray-700"
                >
                  Active
                </Badge>
              </div>

              <Badge className="absolute top-3 right-3 text-xs bg-gray-600 text-white">
                Multi-Platform
              </Badge>

              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
              >
                <Heart className="h-4 w-4 text-gray-600" />
              </Button>

              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Eye className="h-4 w-4 text-gray-600" />
              </Button>
            </div>

            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-bold text-lg leading-tight">Hades</h3>
                  <p className="text-sm text-gray-600">Supergiant Games</p>
                </div>
                <Badge className="text-xs bg-red-100 text-red-800 border-red-200">
                  Action
                </Badge>
              </div>
              <Badge variant="outline" className="w-fit text-xs">
                Hades
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 line-clamp-2">
                Roguelike dungeon crawler where you play as Zagreus, attempting
                to escape from the Underworld.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Gamepad2 className="h-3 w-3 text-orange-500" />
                    <span className="text-xs font-medium">Gameplay</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Palette className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium">Graphics</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium">Story</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <RotateCcw className="h-3 w-3 text-purple-500" />
                    <span className="text-xs font-medium">Replayability</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Roguelike
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Fast-Paced
                  </Badge>
                  <Badge variant="outline" className="text-xs bg-gray-100">
                    +4 more
                  </Badge>
                </div>
              </div>

              <div className="text-xs text-gray-500 pt-2 border-t">
                Released: 2020
              </div>
            </CardContent>
          </Card>
        </div>

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
