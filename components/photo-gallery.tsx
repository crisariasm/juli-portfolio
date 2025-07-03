"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const photos = [
    { id: 1, src: "https://ik.imagekit.io/uue8d0i9qg/IMG-20240907-WA0023.jpg?updatedAt=1751496317018", alt: "Juli en concierto" },
    { id: 2, src: "https://ik.imagekit.io/uue8d0i9qg/20240909_104129.jpg?updatedAt=1751495455839", alt: "Juli practicando" },
    { id: 3, src: "https://ik.imagekit.io/uue8d0i9qg/IMG-0998.JPG?updatedAt=1751495885204", alt: "Juli orquesta sinfónica" },
    { id: 4, src: "https://ik.imagekit.io/uue8d0i9qg/IMG-0082.JPG?updatedAt=1751495453215", alt: "Juli en presentación" },
    { id: 5, src: "https://ik.imagekit.io/uue8d0i9qg/VideoCapture_20240120-124137.jpg?updatedAt=1751496316307", alt: "Juli en mariachi" },
    { id: 6, src: "https://ik.imagekit.io/uue8d0i9qg/IMG-4664%20(1).JPG?updatedAt=1751495885442", alt: "Juli masterclass" },
  ]

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Galería Musical
          </h2>
          <p className="text-xl text-gray-300">Momentos capturados de la pasión musical de Juli</p>
        </div>

        {/* Main Carousel */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-yellow-400/20 group">
            <Image
              src={photos[currentIndex].src || "/placeholder.svg"}
              alt={photos[currentIndex].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Navigation Buttons */}
            <Button
              onClick={prevPhoto}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextPhoto}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Photo Info */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-medium">{photos[currentIndex].alt}</p>
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-yellow-400 scale-105"
                  : "hover:scale-105 hover:ring-2 hover:ring-purple-400"
              }`}
            >
              <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
