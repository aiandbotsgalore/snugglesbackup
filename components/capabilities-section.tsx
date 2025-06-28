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

  return (
    <section className="py-20 bg-gradient-to-b from-black via-slate-900 to-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-wider text-cyan-400 mb-4">
            System Capabilities
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      </div>
    </section>
  )
}
