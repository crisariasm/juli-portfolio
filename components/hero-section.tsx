"use client"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-yellow-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
                JULI
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">Julian Vanegas</h2>
              <p className="text-xl md:text-2xl text-yellow-400 italic font-medium">
                "La música como lenguaje del alma"
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 max-w-2xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                Violinista profesional con más de una década de experiencia, especializado en la fusión de técnica
                clásica con expresión contemporánea. Juli ha dedicado su carrera a formar nuevos talentos y llevar la
                música a corazones de todas las edades, creando conexiones emocionales profundas a través de cada
                interpretación.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <Image
                src="https://ik.imagekit.io/uue8d0i9qg/DSC02478.JPG?updatedAt=1751495455949"
                alt="Julian Vanegas - Juli tocando violín"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
