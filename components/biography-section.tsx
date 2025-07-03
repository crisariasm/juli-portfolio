"use client"

import { Award, Calendar, MapPin, Music4 } from "lucide-react"
import Image from "next/image"

export function BiographySection() {
  return (
    <section id="biografia" className="py-20 bg-gradient-to-b from-black to-purple-950/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Biografía
            </h2>
            <p className="text-xl text-gray-300">La historia detrás de la música</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-300">
                <p className="text-lg leading-relaxed">
                  Julian Vanegas, conocido artísticamente como{" "}
                  <span className="text-yellow-400 font-semibold">Juli</span>, es un violinista apasionado que ha
                  dedicado su vida a explorar las infinitas posibilidades expresivas de este noble instrumento.
                </p>
                <p className="text-lg leading-relaxed">
                  Nacido en una familia donde la música era el lenguaje cotidiano, Juli descubrió su vocación a temprana
                  edad. Su filosofía musical se basa en la creencia de que
                  <span className="text-purple-400 italic"> "la música es el lenguaje del alma"</span>, una convicción
                  que guía cada una de sus interpretaciones y enseñanzas.
                </p>
                <p className="text-lg leading-relaxed">
                  Con más de una década de experiencia profesional, Juli ha logrado crear un estilo único que combina la
                  técnica clásica con la expresión contemporánea, tocando los corazones de audiencias de todas las
                  edades.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20">
                  <Calendar className="h-8 w-8 text-yellow-400 mb-2" />
                  <h4 className="font-semibold text-white">Experiencia</h4>
                  <p className="text-gray-300">+15 años</p>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20">
                  <Award className="h-8 w-8 text-yellow-400 mb-2" />
                  <h4 className="font-semibold text-white">Estudiantes</h4>
                  <p className="text-gray-300">+100 formados</p>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20">
                  <Music4 className="h-8 w-8 text-yellow-400 mb-2" />
                  <h4 className="font-semibold text-white">Conciertos</h4>
                  <p className="text-gray-300">+200 presentaciones</p>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20">
                  <MapPin className="h-8 w-8 text-yellow-400 mb-2" />
                  <h4 className="font-semibold text-white">Ubicación</h4>
                  <p className="text-gray-300">Colombia</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/25">
                <Image
                  src="https://ik.imagekit.io/uue8d0i9qg/IMG-20220619-WA0032.jpg?updatedAt=1751495447535"
                  alt="Julian Vanegas - Juli en su estudio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>

              {/* Decorative quote */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 max-w-xs shadow-xl">
                <p className="text-black font-medium italic text-sm">
                  "Cada nota que toco lleva un pedazo de mi alma, y cada estudiante que enseño recibe esa pasión."
                </p>
                <p className="text-black/70 text-xs mt-2 font-semibold">- Juli</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
