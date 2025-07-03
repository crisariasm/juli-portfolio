"use client"

import { Phone, MessageCircle, Mail, MapPin, Clock, Music, Users, Award, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  const services = [
    {
      icon: Music,
      title: "Clases Individuales",
      description: "Atención personalizada para maximizar tu progreso",
      price: "Desde $50.000/hora",
    },
    {
      icon: Users,
      title: "Clases Grupales",
      description: "Aprende en un ambiente colaborativo y divertido",
      price: "Desde $30.000/hora - persona",
    },
    {
      icon: Award,
      title: "Preparación para Audiciones",
      description: "Entrenamiento especializado para exámenes y concursos",
      price: "Consultar precio",
    },
    {
      icon: Headphones,
      title: "Clases Online",
      description: "Aprende desde la comodidad de tu hogar",
      price: "Desde $40.000/hora",
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-black to-purple-950/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
              Contacto
            </h2>
            <p className="text-xl text-gray-300">¿Listo para comenzar tu viaje musical? ¡Hablemos!</p>
          </div>

          {/* Servicios */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-white mb-8">Nuestros Servicios</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-purple-900/40 to-black/20 border-purple-500/20 hover:border-yellow-400/40 transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-black" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                    <p className="text-black-300 text-sm mb-3">{service.description}</p>
                    <p className="text-yellow-400 font-semibold">{service.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Información de Contacto */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-900/40 to-black/20 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 rounded-full p-3">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-300">Teléfono / WhatsApp</p>
                    <p className="text-white font-semibold">+57 322 519 5629</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500 rounded-full p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white font-semibold">julianv.violin@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-300">Ubicación</p>
                    <p className="text-white font-semibold">Pereira, Colombia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500 rounded-full p-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Horarios de Atención</p>
                    <p className="text-white font-semibold">Lun - Sáb: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/40 to-black/20 rounded-2xl p-8 border border-yellow-400/20">
              <h3 className="text-2xl font-bold text-white mb-6">¡Contáctame Ahora!</h3>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  ¿Tienes preguntas sobre las clases? ¿Quieres conocer más sobre mi metodología? ¿Listo para comenzar tu
                  primera clase gratuita?
                </p>
                <p className="text-white font-medium">
                  No dudes en contactarme. Estoy aquí para ayudarte a descubrir tu potencial musical.
                </p>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-4"
                    onClick={() => {
                      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                      
                      if (isMobile) {
                        window.location.href = 'tel:+573225195629';
                      } else {
                        window.open('tel:+573225195629', '_self');
                      }
                    }}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Llamar Ahora
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-black text-lg py-4 bg-transparent"
                    onClick={() => window.open('https://wa.me/573225195629?text=¡Hola%20Juli!%20Estoy%20muy%20interesado%20en%20tus%20clases%20de%20violín%20para%20descubrir%20mi%20potencial%20musical.%20Me%20gustaría%20conocer%20más%20sobre%20tu%20metodología%20y%20cómo%20podemos%20empezar.%20¡Gracias!', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Enviar WhatsApp
                  </Button>
                </div>

                <div className="bg-black/30 rounded-lg p-4 mt-6">
                  <p className="text-yellow-400 font-semibold mb-2">🎁 Oferta Especial</p>
                  <p className="text-gray-300 text-sm">
                    Menciona que vienes de la página web y recibe un 10% de descuento en tu primer paquete de clases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
