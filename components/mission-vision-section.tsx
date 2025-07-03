"use client"

import { Target, Eye, Heart, Lightbulb } from "lucide-react"

export function MissionVisionSection() {
  return (
    <section id="mision" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
              Misión & Visión Musical
            </h2>
            <p className="text-xl text-gray-300">Los pilares que guían mi pasión por la música</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-2xl p-8 border border-purple-500/20 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-20">
                <Target className="h-24 w-24 text-yellow-400" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-400 rounded-full p-3 mr-4">
                    <Target className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Misión Musical</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Transmitir la belleza y el poder transformador de la música a través del violín, creando conexiones
                    emocionales profundas entre el intérprete y la audiencia.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Mi misión es formar músicos técnicamente sólidos pero, sobre todo, artistas sensibles capaces de
                    comunicar emociones auténticas a través de su instrumento.
                  </p>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <Heart className="h-6 w-6 text-yellow-400" />
                  <span className="text-yellow-400 font-medium">Pasión • Técnica • Expresión</span>
                </div>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-gradient-to-br from-yellow-600/40 to-yellow-500/20 rounded-2xl p-8 border border-yellow-400/20 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-20">
                <Eye className="h-24 w-24 text-purple-400" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-500 rounded-full p-3 mr-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Visión Musical</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Ser reconocido como un educador musical que trasciende las barreras tradicionales, inspirando a una
                    nueva generación de violinistas que ven en la música un medio de expresión personal y conexión
                    humana.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Aspiro a crear un legado musical donde cada estudiante descubra su propia voz artística y contribuya
                    a enriquecer el panorama musical de nuestra comunidad.
                  </p>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <Lightbulb className="h-6 w-6 text-purple-400" />
                  <span className="text-purple-400 font-medium">Inspiración • Legado • Comunidad</span>
                </div>
              </div>
            </div>
          </div>

          {/* Valores Centrales */}
          <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-yellow-600/30 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-center text-white mb-8">Valores Fundamentales</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-black" />
                </div>
                <h4 className="font-semibold text-white mb-2">Pasión</h4>
                <p className="text-gray-300 text-sm">Amor genuino por la música y la enseñanza</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Excelencia</h4>
                <p className="text-gray-300 text-sm">Búsqueda constante de la perfección técnica</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-black" />
                </div>
                <h4 className="font-semibold text-white mb-2">Creatividad</h4>
                <p className="text-gray-300 text-sm">Innovación en métodos y expresión artística</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Visión</h4>
                <p className="text-gray-300 text-sm">Perspectiva amplia del impacto musical</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
