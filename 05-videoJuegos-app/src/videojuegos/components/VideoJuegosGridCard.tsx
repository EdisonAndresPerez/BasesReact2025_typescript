import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Eye, Gamepad2, Heart, Palette, RotateCcw } from "lucide-react"


const VideoJuegosGridCard = () => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-primary/5">
        <div className="relative h-64 overflow-hidden">
          <img
            src="/witcher-3-cover.png"
            alt="The Witcher 3"
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />

          {/* Status indicator */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <Badge variant="secondary" className="text-xs bg-background/90">
              Active
            </Badge>
          </div>

          {/* Platform badge */}
          <Badge className="absolute top-3 right-3 text-xs bg-primary text-primary-foreground">
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
            className="absolute bottom-3 left-3 bg-background/90 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Eye className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>

        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="font-bold text-lg leading-tight">The Witcher 3</h3>
              <p className="text-sm text-muted-foreground">CD Projekt Red</p>
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
          <p className="text-sm text-muted-foreground line-clamp-2">
            Epic open-world RPG following Geralt of Rivia on his quest to find
            his adopted daughter.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Gamepad2 className="h-3 w-3 text-orange-500" />
                <span className="text-xs font-medium">Gameplay</span>
              </div>
              <Progress value={50} className="h-2 [&_[data-slot=progress-indicator]]:bg-orange-500" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Palette className="h-3 w-3 text-blue-500" />
                <span className="text-xs font-medium">Graphics</span>
              </div>
              <Progress value={90} className="h-2 [&_[data-slot=progress-indicator]]:bg-blue-500" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <BookOpen className="h-3 w-3 text-green-500" />
                <span className="text-xs font-medium">Story</span>
              </div>
              <Progress value={100} className="h-2 [&_[data-slot=progress-indicator]]:bg-green-500" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <RotateCcw className="h-3 w-3 text-purple-500" />
                <span className="text-xs font-medium">Replayability</span>
              </div>
              <Progress value={95} className="h-2 [&_[data-slot=progress-indicator]]:bg-purple-500" />
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
              <Badge variant="outline" className="text-xs bg-muted">
                +5 more
              </Badge>
            </div>
          </div>

          <div className="text-xs text-muted-foreground pt-2 border-t">
            Released: 2015
          </div>
        </CardContent>
      </Card>


  )
}

export default VideoJuegosGridCard
