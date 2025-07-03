"use client"

import { Play, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
            Juli en Acción
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experimenta la pasión y virtuosismo de Juli interpretando sus piezas favoritas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/25 group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={isPlaying}
              preload="metadata"
              poster="/placeholder.jpg"
              onEnded={handleVideoEnded}
            >
              <source 
                src="https://ik.imagekit.io/uue8d0i9qg/VID-20210916-WA0005.mp4?updatedAt=1751496023358" 
                type="video/mp4" 
              />
              Tu navegador no soporta la reproducción de video.
            </video>
            
            {/* Overlay con botón de play */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-black/50 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full w-20 h-20 group-hover:scale-110 transition-transform duration-300"
                  onClick={handlePlayClick}
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
