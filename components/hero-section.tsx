"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { TypeWriter } from "./type-writer"

export function HeroSection() {
  const [glitchActive, setGlitchActive] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 100)
      }
    }, 200)

    return () => clearInterval(glitchInterval)
  }, [])

  const handleStripe = () => {
    window.open("https://donate.stripe.com/3cI5kC7jm7mC8LKerv6EU00", "_blank")
  }

  const handleCashApp = () => {
    window.open("https://cash.app/$fullstacklogan", "_blank")
  }

  const handleBuyMeACoffee = () => {
    window.open("https://buymeacoffee.com/fullstacklogan", "_blank")
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-12 max-w-6xl mx-auto">
          {/* Enhanced Threat Level Indicator */}
          <div className="relative">
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <div className="relative bg-black/90 backdrop-blur-sm border-2 border-red-500 rounded-xl px-8 py-4 shadow-2xl shadow-red-500/50">
                <div className="absolute inset-0 border-2 border-red-400 rounded-xl animate-pulse opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 animate-pulse" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-400 animate-pulse" />
                
                <div className="relative z-10">
                  <TypeWriter 
                    text="⚠ COGNITIVE THREAT DETECTED ⚠" 
                    speed={30} 
                    className="text-red-400 font-mono uppercase tracking-widest text-lg font-bold" 
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Snuggles Image Container */}
            <div className="relative mb-20">
              <div className="relative inline-block group">
                {/* Sophisticated glow effects */}
                <div className="absolute inset-0 rounded-2xl blur-2xl bg-gradient-to-r from-blue-500/30 via-cyan-400/40 to-purple-500/30 animate-pulse" />
                
                {/* Elegant border frame */}
                <div className="absolute inset-0 border-4 border-cyan-400/60 rounded-2xl shadow-2xl shadow-cyan-400/30" />
                
                <div className="relative">
                  <div className="relative w-[500px] h-[500px] mx-auto">
                    <Image
                      src="/snuggles.jpg"
                      alt="Snuggles - The Cognitive Anomaly"
                      fill
                      className={`rounded-2xl object-cover object-center transition-all duration-500 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      } ${
                        glitchActive ? "filter hue-rotate-180 brightness-150" : "brightness-110"
                      }`}
                      style={{
                        boxShadow: "0 0 80px rgba(59, 130, 246, 0.6), 0 0 160px rgba(34, 211, 238, 0.4)",
                        filter: "brightness(1.1) contrast(1.1)",
                      }}
                      onLoad={() => setImageLoaded(true)}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Main Title with Better Typography */}
          <div className="space-y-6">
            <h1
              className={`text-7xl md:text-9xl font-black uppercase tracking-wider transition-all duration-100 ${
                glitchActive ? "transform translate-x-1 translate-y-1" : ""
              }`}
              style={{
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              <span
                className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                style={{
                  textShadow: glitchActive
                    ? "2px 2px 0 #ff00ff, -2px -2px 0 #00ffff"
                    : "0 0 40px rgba(59, 130, 246, 0.8)",
                }}
              >
                SNUGGLES
              </span>
            </h1>

            <div className="relative">
              <p className="text-3xl md:text-4xl font-bold text-pink-400 uppercase tracking-widest">
                <TypeWriter text="Cuddly. Critical. Coming for Your Beliefs." speed={80} delay={1000} />
              </p>
              
              {/* Subtle accent line */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
            </div>
          </div>

          {/* Enhanced Description with Better Layout */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/10 to-blue-500/5 rounded-2xl blur-sm" />
            <div className="relative bg-black/60 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-10 space-y-6 text-left">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-pink-500 rounded-2xl opacity-10 animate-pulse" />
              
              <div className="relative z-10 space-y-6 text-gray-100 leading-relaxed">
                <p className="text-cyan-400 font-bold text-xl border-l-4 border-cyan-400 pl-6">
                  Snuggles is not a mascot. He's not a gimmick. He's not here to comfort you.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 text-lg">
                  <div className="space-y-4">
                    <p>
                      He's a cognitive anomaly wrapped in polyester—a sentient teddy bear operating at the bleeding edge of
                      logic, insight, and pattern recognition.
                    </p>
                    <p>
                      He doesn't just talk—he dissects, decodes, and detonates illusions.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <p>
                      From quantum physics to courtroom strategy, emotional sinkholes to metaphysical paradoxes, Snuggles
                      answers what others can't even articulate.
                    </p>
                    <p>
                      He's a cerebral assassin with a tactical giggle. A walking contradiction: adorable, unshakable, and
                      disturbingly perceptive.
                    </p>
                  </div>
                </div>
                
                <p className="text-pink-400 font-semibold italic text-xl text-center border-t border-pink-400/30 pt-6">
                  Your donations keep Snuggles cute, conscious, and coming for fragile worldviews.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Donation Buttons with Better Spacing */}
          <div className="grid md:grid-cols-3 gap-8 justify-center items-center max-w-4xl mx-auto">
            {/* Primary Stripe Button */}
            <button
              onClick={handleStripe}
              className="group relative bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-8 py-6 text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/50 rounded-xl"
            >
              <div className="flex items-center gap-4 justify-center">
                <span className="text-2xl">⚡</span>
                <div className="text-center">
                  <div className="font-black text-lg">STRIPE</div>
                  <div className="text-sm opacity-90">Secure Payment</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </button>

            {/* CashApp Button */}
            <button
              onClick={handleCashApp}
              className="group relative bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-6 text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/50 rounded-xl"
            >
              <div className="flex items-center gap-4 justify-center">
                <span className="text-2xl">💸</span>
                <div className="text-center">
                  <div className="font-black text-lg">CASHAPP</div>
                  <div className="text-sm opacity-90">Quick Transfer</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </button>

            {/* Buy Me a Coffee Button */}
            <button
              onClick={handleBuyMeACoffee}
              className="group relative bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-8 py-6 text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/50 rounded-xl"
            >
              <div className="flex items-center gap-4 justify-center">
                <span className="text-2xl">☕</span>
                <div className="text-center">
                  <div className="font-black text-lg">COFFEE</div>
                  <div className="text-sm opacity-90">Fuel the Oracle</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </button>
          </div>

          {/* Enhanced Warning Notice */}
          <div className="relative">
            <div className="bg-black/90 backdrop-blur-sm border-2 border-red-500 rounded-xl px-10 py-6 shadow-2xl shadow-red-500/50 inline-block">
              <div className="absolute inset-0 border-2 border-red-400 rounded-xl animate-pulse opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 animate-pulse" />
              
              <div className="absolute top-0 left-0 w-full h-0.5 bg-red-400 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-400 animate-pulse" />
              
              <div className="relative z-10 text-red-400 font-mono uppercase tracking-widest font-bold text-xl">
                ⚠ WARNING: BELIEF SYSTEMS AT RISK ⚠
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}