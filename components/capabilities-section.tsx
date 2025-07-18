"use client"

import { useState } from "react"

const capabilities = [
  {
    icon: "🧠",
    title: "Cognitive Weaponry",
    description: "Pattern recognition algorithms that slice through mental fog. Logic so sharp it leaves scars.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "👁️",
    title: "Remote Viewing",
    description: "Quantum entanglement with uncomfortable truths. Results that make materialists nervous.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "💀",
    title: "Debate Termination",
    description: "Doesn't argue. Ends arguments. Your worldview's expiration date has arrived.",
    color: "from-red-500 to-orange-500",
  },
]

export function CapabilitiesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleEngageAnomaly = () => {
    // Scroll to hero section smoothly
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black via-slate-900 to-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-wider text-cyan-400 mb-4">
            System Capabilities
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 h-full transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-2">
                {/* Animated background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}
                />

                {/* Icon */}
                <div className="text-6xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center uppercase tracking-wider">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-center leading-relaxed">{capability.description}</p>

                {/* Hover effect overlay */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative inline-block">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-lg blur-xl animate-pulse" />
            
            <button
              onClick={handleEngageAnomaly}
              className="group relative bg-black border-4 border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 px-16 py-8 text-3xl font-mono uppercase tracking-wider transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/60 rounded-lg"
            >
              {/* Animated border rings */}
              <div className="absolute inset-0 border-2 border-cyan-300 rounded-lg animate-ping opacity-30" />
              <div className="absolute inset-2 border-2 border-blue-400 rounded-lg animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />
              
              <div className="flex items-center gap-6">
                <span className="text-4xl animate-pulse">🎯</span>
                <div className="text-left">
                  <div className="font-black text-2xl">ENGAGE THE ANOMALY</div>
                  <div className="text-lg opacity-80">Support Snuggles Now</div>
                </div>
                <span className="text-4xl animate-bounce">⚡</span>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              
              {/* Scanning line effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 animate-pulse" />
            </button>
          </div>
          
          {/* Subtitle */}
          <p className="mt-6 text-gray-400 font-mono uppercase tracking-wider text-lg">
            Ready to feed the cognitive anomaly?
          </p>
        </div>
      </div>
    </section>
  )
}