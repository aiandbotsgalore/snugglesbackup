"use client"

import { useState } from "react"

// Confetti burst utility
function launchConfetti(x: number, y: number) {
  const colors = ["#00ff00", "#ff6600", "#3b82f6", "#fff700", "#00ffff"]
  const emojis = ["✨", "⚡", "☕", "💸", "🧸"]
  const confettiRoot = document.createElement("div")
  confettiRoot.style.position = "fixed"
  confettiRoot.style.left = "0"
  confettiRoot.style.top = "0"
  confettiRoot.style.width = "100vw"
  confettiRoot.style.height = "100vh"
  confettiRoot.style.pointerEvents = "none"
  confettiRoot.style.zIndex = "9999"
  document.body.appendChild(confettiRoot)

  for (let i = 0; i < 30; i++) {
    const el = document.createElement("span")
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)]
    el.style.position = "absolute"
    el.style.left = `${x + (Math.random() - 0.5) * 60}px`
    el.style.top = `${y + (Math.random() - 0.5) * 40}px`
    el.style.fontSize = `${Math.random() * 20 + 30}px`
    el.style.color = colors[Math.floor(Math.random() * colors.length)]
    el.style.transition = "transform 1.5s cubic-bezier(.4,2,.3,1), opacity 1.5s"
    el.style.opacity = "1"
    confettiRoot.appendChild(el)
    setTimeout(() => {
      el.style.transform = `translate(${(Math.random() - 0.5) * 300}px, ${-Math.random() * 300 - 150}px) rotate(${Math.random() * 720}deg)`
      el.style.opacity = "0"
    }, 50)
  }
  setTimeout(() => confettiRoot.remove(), 1800)
}

export function FloatingDonationButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleStripe = (e: React.MouseEvent) => {
    const x = e.clientX, y = e.clientY
    launchConfetti(x, y)
    window.open("https://donate.stripe.com/3cI5kC7jm7mC8LKerv6EU00", "_blank", "noopener")
  }

  const handleCashApp = (e: React.MouseEvent) => {
    const x = e.clientX, y = e.clientY
    launchConfetti(x, y)
    window.open("https://cash.app/$fullstacklogan", "_blank", "noopener")
  }

  const handleBuyMeACoffee = (e: React.MouseEvent) => {
    const x = e.clientX, y = e.clientY
    launchConfetti(x, y)
    window.open("https://buymeacoffee.com/fullstacklogan", "_blank", "noopener")
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Expanded Menu - MUCH BIGGER */}
      {isExpanded && (
        <div className="absolute bottom-32 right-0 flex flex-col gap-6 animate-in slide-in-from-bottom-4 duration-500">
          {/* Stripe Button - MUCH BIGGER */}
          <button
            onClick={handleStripe}
            className="group bg-black border-4 border-green-400 text-green-400 hover:bg-green-400/30 px-12 py-8 font-mono uppercase tracking-wider transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-400/60 rounded-xl flex items-center gap-6 min-w-[350px] text-2xl font-black"
          >
            <span className="text-4xl animate-pulse">⚡</span>
            <span>STRIPE DONATE</span>
            <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </button>

          {/* CashApp Button - MUCH BIGGER */}
          <button
            onClick={handleCashApp}
            className="group bg-black border-4 border-green-500 text-green-500 hover:bg-green-500/30 px-12 py-8 font-mono uppercase tracking-wider transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/60 rounded-xl flex items-center gap-6 min-w-[350px] text-2xl font-black"
          >
            <span className="text-4xl animate-bounce">💸</span>
            <span>CASHAPP</span>
            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </button>

          {/* Buy Me a Coffee Button - MUCH BIGGER */}
          <button
            onClick={handleBuyMeACoffee}
            className="group bg-black border-4 border-orange-400 text-orange-400 hover:bg-orange-400/30 px-12 py-8 font-mono uppercase tracking-wider transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-400/60 rounded-xl flex items-center gap-6 min-w-[350px] text-2xl font-black"
          >
            <span className="text-4xl animate-pulse">☕</span>
            <span>BUY COFFEE</span>
            <div className="absolute inset-0 bg-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </button>
        </div>
      )}

      {/* MASSIVE Main Floating Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`group relative bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-green-500 hover:via-blue-600 hover:to-purple-700 text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-125 ${
          isExpanded ? 'rotate-45' : 'hover:rotate-12 animate-bounce'
        }`}
        style={{
          width: '140px',
          height: '140px',
          boxShadow: "0 25px 80px rgba(34, 197, 94, 0.7), 0 0 0 6px rgba(34, 197, 94, 0.4), 0 0 120px rgba(59, 130, 246, 0.5)",
          animation: "mega-pulse-glow 1.5s ease-in-out infinite, mega-bounce 2s ease-in-out infinite",
        }}
        aria-label="DONATE NOW - Support Snuggles!"
      >
        <div className="relative">
          {/* Multiple pulsing rings */}
          <div className="absolute inset-0 rounded-full bg-green-400/40 animate-ping" />
          <div className="absolute inset-2 rounded-full bg-blue-500/30 animate-ping" style={{ animationDelay: '0.5s' }} />
          <div className="absolute inset-4 rounded-full bg-purple-600/20 animate-ping" style={{ animationDelay: '1s' }} />
          
          {/* Main icon */}
          <div className="relative text-6xl font-black flex items-center justify-center h-full">
            {isExpanded ? '✕' : '💰'}
          </div>
          
          {/* Massive notification badge */}
          <div className="absolute -top-6 -right-6 bg-red-500 text-white text-xl font-black rounded-full w-16 h-16 flex items-center justify-center animate-bounce border-4 border-white shadow-lg">
            !
          </div>

          {/* Urgent text overlay */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider animate-pulse whitespace-nowrap">
            DONATE NOW!
          </div>
        </div>
      </button>

      <style jsx>{`
        @keyframes mega-pulse-glow {
          0%, 100% {
            box-shadow: 0 25px 80px rgba(34, 197, 94, 0.7), 0 0 0 6px rgba(34, 197, 94, 0.4), 0 0 120px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 35px 100px rgba(34, 197, 94, 0.9), 0 0 0 10px rgba(34, 197, 94, 0.6), 0 0 180px rgba(59, 130, 246, 0.7);
          }
        }
        @keyframes mega-bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-15px);
          }
          60% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  )
}