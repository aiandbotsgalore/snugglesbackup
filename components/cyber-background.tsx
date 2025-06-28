"use client"

import { useEffect, useState } from "react"

import { StarfieldBackground } from "@/components/starfield-background"

export function CyberBackground() {
  const [rainDrops, setRainDrops] = useState<string[]>([])

  useEffect(() => {
    const generateBinary = () => {
      return Array.from({ length: 8 }, () => (Math.random() > 0.5 ? "1" : "0")).join("")
    }

    const interval = setInterval(() => {
      setRainDrops(Array.from({ length: 9 }, generateBinary))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Starfield Layer */}
      <StarfieldBackground />
      {/* Cyber Grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <div
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 10s linear infinite",
          }}
        />
      </div>

      {/* Digital Rain */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        {rainDrops.map((binary, index) => (
          <div
            key={index}
            className="absolute text-cyan-400 font-mono text-sm animate-pulse"
            style={{
              left: `${10 + index * 10}%`,
              top: "-10%",
              animation: `rain-fall 10s linear infinite ${index}s`,
            }}
          >
            {binary}
          </div>
        ))}
      </div>

      {/* Scanner Line */}
      <div
        className="fixed top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none z-10"
        style={{
          animation: "scan 3s linear infinite",
        }}
      />

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes rain-fall {
          to { transform: translateY(200vh); }
        }
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </>
  )
}
