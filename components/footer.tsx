"use client"

import { Music, Instagram, Phone, MessageCircle } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { 
      icon: "tiktok",
      href: "https://www.tiktok.com/@julianv.violin", 
      label: "TikTok" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/julianvanegasviolin", 
      label: "Instagram" 
    },
    { 
      icon: MessageCircle, 
      href: "https://wa.me/573225195629", 
      label: "WhatsApp" 
    },
    { 
      icon: Phone, 
      href: "tel:+573225195629", 
      label: "Llamar" 
    },
  ]

  const TikTokIcon = () => (
    <svg className="h-5 w-5 text-gray-300 group-hover:text-yellow-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )

  return (
    <footer className="bg-gradient-to-t from-purple-950 to-black border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo y Descripción */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Music className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
                Juli
              </span>
            </div>
            <p className="text-gray-300 text-sm max-w-xs mx-auto md:mx-0">
              Violinista profesional dedicado a enseñar y compartir la pasión por la música.
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Sígueme en Redes</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-purple-900/50 hover:bg-purple-800 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
                >
                  {social.icon === "tiktok" ? (
                    <TikTokIcon />
                  ) : (
                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-yellow-400 transition-colors duration-300" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Contacto Rápido */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Contacto Rápido</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📱 +57 322 519 5629</p>
              <p>✉️ julianv.violin@gmail.com</p>
              <p>📍 Pereira, Colombia</p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-purple-500/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">© {new Date().getFullYear()} Juli - Julian Vanegas. Todos los derechos reservados.</p>
            <p className="text-gray-400 text-sm italic text-center md:text-right">"La música como lenguaje del alma"</p>
          </div>
        </div>

        {/* Notas musicales decorativas */}
        <div className="absolute bottom-4 left-4 text-purple-500/10 text-2xl animate-pulse">♪</div>
        <div className="absolute bottom-8 right-8 text-yellow-400/10 text-xl animate-bounce">♫</div>
      </div>
    </footer>
  )
}
