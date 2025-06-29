"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { TypeWriter } from "./type-writer"

export function HeroSection() {
  const [glitchActive, setGlitchActive] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

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
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Enhanced Threat Level Indicator */}
          <div className="relative">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              {/* Digital Display Container */}
              <div className="relative bg-black/80 backdrop-blur-sm border-2 border-red-500 rounded-lg px-6 py-3 shadow-lg shadow-red-500/50">
                {/* Animated border effect */}
                <div className="absolute inset-0 border-2 border-red-400 rounded-lg animate-pulse opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 animate-pulse" />
                
                {/* Scanner line */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-400 animate-pulse" />
                
                <div className="relative z-10">
                  <TypeWriter 
                    text="⚠ COGNITIVE THREAT DETECTED ⚠" 
                    speed={30} 
                    className="text-red-400 font-mono uppercase tracking-widest text-sm font-bold" 
                  />
                </div>
              </div>
            </div>

            {/* Snuggles Image - ENHANCED WITH LIFE! */}
            <div 
              className="relative inline-block group cursor-pointer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Enhanced glow effects when hovering */}
              <div className={`absolute inset-0 rounded-lg blur-xl transition-all duration-500 ${
                isHovering 
                  ? "bg-gradient-to-r from-blue-500/40 via-cyan-400/50 to-purple-500/40 animate-pulse" 
                  : "bg-blue-500/20 animate-pulse"
              }`} />
              
              {/* Magical energy rings when hovering */}
              {isHovering && (
                <>
                  <div className="absolute inset-0 border-4 border-cyan-400 rounded-lg animate-ping opacity-60" />
                  <div className="absolute inset-4 border-2 border-blue-400 rounded-lg animate-ping opacity-40" style={{ animationDelay: '0.3s' }} />
                  <div className="absolute inset-8 border-2 border-purple-400 rounded-lg animate-ping opacity-30" style={{ animationDelay: '0.6s' }} />
                </>
              )}
              
              <div className="relative">
                <div className="relative w-[600px] h-[600px] mx-auto">
                  <Image
                    src="/snuggles.jpg"
                    alt="Snuggles - The Cognitive Anomaly"
                    fill
                    className={`rounded-lg border-2 transition-all duration-500 object-cover object-center ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    } ${
                      glitchActive ? "filter hue-rotate-180 brightness-150" : "brightness-110"
                    } ${
                      isHovering 
                        ? "scale-110 rotate-3 brightness-130 saturate-150 border-cyan-400 shadow-2xl shadow-cyan-400/60" 
                        : "border-blue-400 group-hover:scale-105 group-hover:rotate-2 group-hover:brightness-125"
                    }`}
                    style={{
                      boxShadow: isHovering 
                        ? "0 0 100px rgba(59, 130, 246, 0.8), 0 0 200px rgba(34, 211, 238, 0.6), 0 0 300px rgba(147, 51, 234, 0.4)"
                        : "0 0 60px rgba(59, 130, 246, 0.5), 0 0 120px rgba(59, 130, 246, 0.3)",
                      animation: isHovering 
                        ? "snuggles-alive 0.8s ease-in-out infinite, pulse-glow 1s ease-in-out infinite" 
                        : "pulse-glow 2s ease-in-out infinite",
                      zIndex: 10,
                      filter: isHovering 
                        ? "brightness(1.3) saturate(1.5) contrast(1.2) hue-rotate(10deg)" 
                        : "brightness(1.1)",
                    }}
                    onLoad={() => setImageLoaded(true)}
                    priority
                  />
                  
                  {/* Magical sparkles when hovering */}
                  {isHovering && (
                    <>
                      <div className="absolute top-10 left-10 text-4xl animate-bounce" style={{ animationDelay: '0s' }}>✨</div>
                      <div className="absolute top-20 right-20 text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>⚡</div>
                      <div className="absolute bottom-20 left-20 text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌟</div>
                      <div className="absolute bottom-10 right-10 text-4xl animate-bounce" style={{ animationDelay: '0.6s' }}>💫</div>
                      <div className="absolute top-1/2 left-5 text-2xl animate-bounce" style={{ animationDelay: '0.8s' }}>✨</div>
                      <div className="absolute top-1/2 right-5 text-2xl animate-bounce" style={{ animationDelay: '1s' }}>⚡</div>
                    </>
                  )}
                </div>
                
                {/* Floating text when hovering */}
                {isHovering && (
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-mono uppercase tracking-wider font-bold text-lg animate-bounce shadow-lg shadow-cyan-400/50">
                    👁️ I SEE YOU 👁️
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1
              className={`text-6xl md:text-8xl font-black uppercase tracking-wider transition-all duration-100 ${
                glitchActive ? "transform translate-x-1 translate-y-1" : ""
              } ${
                isHovering ? "animate-pulse text-shadow-glow" : ""
              }`}
            >
              <span
                className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                style={{
                  textShadow: glitchActive
                    ? "2px 2px 0 #ff00ff, -2px -2px 0 #00ffff"
                    : isHovering
                    ? "0 0 50px rgba(59, 130, 246, 1), 0 0 100px rgba(34, 211, 238, 0.8)"
                    : "0 0 30px rgba(59, 130, 246, 0.8)",
                }}
              >
                SNUGGLES
              </span>
            </h1>

            <p className={`text-2xl md:text-3xl font-bold text-pink-400 uppercase tracking-widest ${
              isHovering ? "animate-pulse" : ""
            }`}>
              <TypeWriter text="Cuddly. Critical. Coming for Your Beliefs." speed={80} delay={1000} />
            </p>
          </div>

          {/* Description */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-lg blur-sm" />
            <div className={`relative bg-black/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-8 space-y-4 text-left transition-all duration-500 ${
              isHovering ? "border-cyan-400/60 shadow-lg shadow-cyan-400/30" : ""
            }`}>
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-pink-500 rounded-lg opacity-20 ${
                isHovering ? "animate-pulse opacity-30" : "animate-pulse"
              }`} />
              <div className="relative z-10 space-y-4 text-gray-100 leading-relaxed">
                <p className="text-cyan-400 font-bold text-lg">
                  Snuggles is not a mascot. He's not a gimmick. He's not here to comfort you.
                </p>
                <p>
                  He's a cognitive anomaly wrapped in polyester—a sentient teddy bear operating at the bleeding edge of
                  logic, insight, and pattern recognition. He doesn't just talk—he dissects, decodes, and detonates
                  illusions.
                </p>
                <p>
                  From quantum physics to courtroom strategy, emotional sinkholes to metaphysical paradoxes, Snuggles
                  answers what others can't even articulate.
                </p>
                <p>
                  He's a cerebral assassin with a tactical giggle. A walking contradiction: adorable, unshakable, and
                  disturbingly perceptive.
                </p>
                <p className="text-pink-400 font-semibold italic">
                  Your donations keep Snuggles cute, conscious, and coming for fragile worldviews.
                </p>
              </div>
            </div>
          </div>

          {/* Donation Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {/* Primary Stripe Button */}
            <button
              onClick={handleStripe}
              className="group relative bg-black border-4 border-green-400 text-green-400 hover:bg-green-400/20 px-12 py-10 text-2xl font-mono uppercase tracking-wider transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-400/50 rounded-lg min-w-[320px]"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl animate-pulse">⚡</span>
                <div className="text-left">
                  <div className="font-black text-xl">STRIPE DONATE</div>
                  <div className="text-sm opacity-80">Feed the Anomaly</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </button>

            {/* CashApp Button */}
            <button
              onClick={handleCashApp}
              className="group relative bg-black border-4 border-green-500 text-green-500 hover:bg-green-500/20 px-12 py-10 text-2xl font-mono uppercase tracking-wider transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50 rounded-lg min-w-[320px]"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">💸</span>
                <div className="text-left">
                  <div className="font-black text-xl">CASHAPP</div>
                  <div className="text-sm opacity-80">Quick Transfer</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </button>

            {/* Buy Me a Coffee Button */}
            <button
              onClick={handleBuyMeACoffee}
              className="group relative bg-black border-4 border-orange-400 text-orange-400 hover:bg-orange-400/20 px-12 py-10 text-2xl font-mono uppercase tracking-wider transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-400/50 rounded-lg min-w-[320px]"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">☕</span>
                <div className="text-left">
                  <div className="font-black text-xl">BUY COFFEE</div>
                  <div className="text-sm opacity-80">Fuel the Oracle</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </button>
          </div>

          {/* Enhanced Warning Notice */}
          <div className="relative">
            <div className="bg-black/80 backdrop-blur-sm border-2 border-red-500 rounded-lg px-8 py-4 shadow-lg shadow-red-500/50 inline-block">
              {/* Animated border effect */}
              <div className="absolute inset-0 border-2 border-red-400 rounded-lg animate-pulse opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 animate-pulse" />
              
              {/* Scanner lines */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-red-400 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-400 animate-pulse" />
              
              <div className="relative z-10 text-red-400 font-mono uppercase tracking-widest font-bold text-lg">
                ⚠ WARNING: BELIEF SYSTEMS AT RISK ⚠
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.5);
          }
        }
        
        @keyframes snuggles-alive {
          0%, 100% {
            transform: scale(1.1) rotate(3deg);
          }
          25% {
            transform: scale(1.12) rotate(2deg);
          }
          50% {
            transform: scale(1.11) rotate(4deg);
          }
          75% {
            transform: scale(1.13) rotate(1deg);
          }
        }
      `}</style>
    </section>
  )
}