"use client"

import { Button } from "@/components/ui/button"
import { Gift, Music, Star, Clock } from "lucide-react"

export function ViolinClassesBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-yellow-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">♪</div>
        <div className="absolute top-32 right-20 text-4xl">♫</div>
        <div className="absolute bottom-20 left-32 text-5xl">♪</div>
        <div className="absolute bottom-10 right-10 text-3xl">♫</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-yellow-400 text-black px-4 py-2 rounded-full font-bold mb-4">
              <Gift className="mr-2 h-5 w-5" />
              OFERTA ESPECIAL
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Clases de Violín</h2>
            <p className="text-xl md:text-2xl text-yellow-200 mb-2">con Juli</p>
            <p className="text-lg text-purple-200">Descubre tu potencial musical con un maestro apasionado</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
              <Music className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Técnica Profesional</h3>
              <p className="text-purple-200">Aprende con métodos probados y personalizados</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Experiencia Única</h3>
              <p className="text-purple-200">Más de 10 años formando músicos exitosos</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
              <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Horarios Flexibles</h3>
              <p className="text-purple-200">Clases adaptadas a tu disponibilidad</p>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 mb-8">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">🎁 PRIMERA CLASE GRATIS</h3>
            <p className="text-xl text-white mb-6">
              Conoce mi metodología y descubre tu potencial musical sin compromiso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/573225195629?text=¡Hola%20Juli!%20Me%20gustaría%20reservar%20mi%20primera%20clase%20gratuita%20de%20violín%20contigo.%20Estoy%20muy%20entusiasmado%20de%20empezar%20este%20hermoso%20viaje%20musical.%20¿Cuándo%20podríamos%20agendar%20la%20clase?', '_blank')}
              >
                Reservar Clase Gratis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 bg-transparent"
                onClick={() => window.open('https://wa.me/573225195629?text=¡Hola%20Juli!%20Me%20interesa%20mucho%20conocer%20más%20información%20sobre%20tus%20clases%20de%20violín.%20Me%20gustaría%20saber%20sobre%20tu%20metodología,%20horarios%20y%20precios.%20¡Gracias!', '_blank')}
              >
                Más Información
              </Button>
            </div>
          </div>

          <p className="text-purple-200 text-sm">
            * Oferta válida para nuevos estudiantes. Incluye evaluación personalizada y plan de estudios.
          </p>
        </div>
      </div>
    </section>
  )
}
