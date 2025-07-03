"use client"

import { useEffect, useState } from "react"

export function FloatingNotes() {
  const [notes, setNotes] = useState<Array<{ id: number; x: number; y: number; symbol: string; delay: number }>>([])

  useEffect(() => {
    const musicSymbols = ["♪", "♫", "♬", "♩", "♭", "♯"]
    const newNotes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      symbol: musicSymbols[Math.floor(Math.random() * musicSymbols.length)],
      delay: Math.random() * 10,
    }))
    setNotes(newNotes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {notes.map((note) => (
        <div
          key={note.id}
          className="absolute text-purple-500/10 text-2xl animate-float"
          style={{
            left: `${note.x}%`,
            top: `${note.y}%`,
            animationDelay: `${note.delay}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          {note.symbol}
        </div>
      ))}
    </div>
  )
}
