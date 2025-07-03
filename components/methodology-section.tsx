"use client"

import { BookOpen, Users, Trophy, Clock, CheckCircle, Star } from "lucide-react"

export function MethodologySection() {
  const methodologySteps = [
    {
      icon: BookOpen,
      title: "Evaluación Inicial",
      description: "Análisis personalizado del nivel y objetivos del estudiante",
      color: "yellow",
    },
    {
      icon: Users,
      title: "Plan Personalizado",
      description: "Diseño de un programa adaptado a las necesidades individuales",
      color: "purple",
    },
    {
      icon: Clock,
      title: "Práctica Estructurada",
      description: "Sesiones organizadas con técnicas progresivas y efectivas",
      color: "yellow",
    },
    {
      icon: Trophy,
      title: "Evaluación Continua",
      description: "Seguimiento constante del progreso y ajustes metodológicos",
      color: "purple",
    },
  ]

  const benefits = [
    "Técnica sólida desde los fundamentos",
    "Desarrollo del oído musical",
    "Interpretación expresiva y personal",
    "Confianza escénica",
    "Repertorio diverso y adaptado",
    "Disciplina y constancia musical",
  ]

  return (
    <section id="metodologia" className="py-20 bg-gradient-to-b from-purple-950/30 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
              Metodología
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un enfoque integral que combina técnica clásica, expresión personal y desarrollo musical completo
            </p>
          </div>

          {/* Proceso Metodológico */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-white mb-12">Mi Proceso de Enseñanza</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodologySteps.map((step, index) => (
                <div key={index} className="relative">
                  <div
                    className={`bg-gradient-to-br ${
                      step.color === "yellow"
                        ? "from-yellow-500/20 to-yellow-600/10 border-yellow-400/30"
                        : "from-purple-500/20 to-purple-600/10 border-purple-400/30"
                    } rounded-2xl p-6 border text-center h-full`}
                  >
                    <div
                      className={`${
                        step.color === "yellow" ? "bg-yellow-400" : "bg-purple-500"
                      } rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                    >
                      <step.icon className={`h-8 w-8 ${step.color === "yellow" ? "text-black" : "text-white"}`} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-gray-300">{step.description}</p>
                  </div>

                  {/* Connector Arrow */}
                  {index < methodologySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-purple-400"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-purple-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Beneficios y Características */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-900/40 to-black/20 rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center mb-6">
                <Star className="h-8 w-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Beneficios del Método</h3>
              </div>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/40 to-black/20 rounded-2xl p-8 border border-yellow-400/20">
              <h3 className="text-2xl font-bold text-white mb-6">Filosofía Pedagógica</h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Creo firmemente que cada estudiante tiene un potencial único que debe ser descubierto y cultivado. Mi
                  metodología se adapta al ritmo y estilo de aprendizaje individual.
                </p>
                <p className="text-lg leading-relaxed">
                  La técnica es fundamental, pero nunca debe eclipsar la expresión personal. Busco el equilibrio
                  perfecto entre disciplina y creatividad.
                </p>
                <div className="bg-black/30 rounded-lg p-4 mt-6">
                  <p className="text-yellow-400 italic font-medium">
                    "Un buen maestro no solo enseña notas, sino que despierta la música que ya vive en el corazón del
                    estudiante."
                  </p>
                  <p className="text-gray-400 text-sm mt-2">- Juli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
