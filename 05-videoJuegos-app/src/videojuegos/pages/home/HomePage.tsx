import {
  Search,
  Plus,
  Filter,
  SortAsc,
  Heart,
  Grid,
  Users,
  Gamepad2,
  Trophy,
  Eye,
  Palette,
  BookOpen,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";

export const HomePage = () => {
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title="Video Games Universe" description="Discover, explore, and manage your favorite video games" />

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Games</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">16</div>
              <div className="flex gap-1 mt-2">
                <Badge variant="secondary" className="text-xs">
                  10 Active
                </Badge>
                <Badge variant="outline" className="text-xs">
                  4 Legacy
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Favorites</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">3</div>
              <p className="text-xs text-muted-foreground">18.8% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Best Gameplay
              </CardTitle>
              <Gamepad2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold">The Witcher 3</div>
              <p className="text-xs text-muted-foreground">Gameplay: 10/10</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Story</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold">The Last of Us</div>
              <p className="text-xs text-muted-foreground">Story: 10/10</p>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search games, developers, franchises, platforms..."
              className="pl-12 h-12 text-lg"
            />
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <Button variant="outline" className="h-12 bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>

            <Button variant="outline" className="h-12 bg-transparent">
              <SortAsc className="h-4 w-4 mr-2" />
              Sort by Title
            </Button>

            <Button variant="outline" className="h-12 bg-transparent">
              <Grid className="h-4 w-4" />
            </Button>

            <Button className="h-12">
              <Plus className="h-4 w-4 mr-2" />
              Add Game
            </Button>
          </div>
        </div>

        {/* Advanced Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Advanced Filters</h3>
            <Button variant="ghost">Clear All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Franchise</label>
              <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                All franchises
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                All categories
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Platform</label>
              <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                All platforms
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                All statuses
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium">
              Minimum Gameplay Rating: 0/10
            </label>
            <div className="relative flex w-full touch-none select-none items-center mt-2">
              <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
                <div
                  className="absolute h-full bg-primary"
                  style={{ width: "0%" }}
                />
              </div>
              <div className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors" />
            </div>
          </div>
        </div>

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

        {/* Results info */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Showing 6 of 16 games</p>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Filter className="h-3 w-3" />
              Filtered
            </Badge>
          </div>
        </div>

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
