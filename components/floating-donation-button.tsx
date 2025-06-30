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
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="absolute bottom-32 right-0 flex flex-col gap-4 animate-in slide-in-from-bottom-4 duration-500">
          {/* Stripe Button */}
          <button
            onClick={handleStripe}
            className="group bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white border-2 border-green-400 px-6 py-4 font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-400/50 rounded-xl flex items-center gap-3 min-w-[240px] text-lg"
          >
            <span className="text-2xl">⚡</span>
            <span>STRIPE DONATE</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </button>

          {/* CashApp Button */}
          <button
            onClick={handleCashApp}
            className="group bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white border-2 border-emerald-400 px-6 py-4 font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/50 rounded-xl flex items-center gap-3 min-w-[240px] text-lg"
          >
            <span className="text-2xl">💸</span>
            <span>CASHAPP</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </button>

          {/* Buy Me a Coffee Button */}
          <button
            onClick={handleBuyMeACoffee}
            className="group bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white border-2 border-orange-400 px-6 py-4 font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-400/50 rounded-xl flex items-center gap-3 min-w-[240px] text-lg"
          >
            <span className="text-2xl">☕</span>
            <span>BUY COFFEE</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </button>
        </div>
      )}

      {/* Enhanced Main Floating Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`group relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 hover:from-green-400 hover:via-blue-400 hover:to-purple-500 text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110 ${
          isExpanded ? 'rotate-45' : 'hover:rotate-12'
        }`}
        style={{
          width: '100px',
          height: '100px',
          boxShadow: "0 15px 50px rgba(34, 197, 94, 0.5), 0 0 0 3px rgba(34, 197, 94, 0.2), 0 0 80px rgba(59, 130, 246, 0.3)",
        }}
        aria-label="DONATE NOW - Support Snuggles!"
      >
        <div className="relative">
          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full bg-green-400/30 animate-ping" />
          <div className="absolute inset-2 rounded-full bg-blue-500/20 animate-ping" style={{ animationDelay: '0.5s' }} />
          
          {/* Main icon */}
          <div className="relative text-4xl font-black flex items-center justify-center h-full">
            {isExpanded ? '✕' : '💰'}
          </div>
          
          {/* Notification badge */}
          <div className="absolute -top-3 -right-3 bg-red-500 text-white text-sm font-black rounded-full w-8 h-8 flex items-center justify-center animate-bounce border-2 border-white shadow-lg">
            !
          </div>

          {/* Urgent text overlay */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-black uppercase tracking-wider animate-pulse whitespace-nowrap">
            DONATE
          </div>
        </div>
      </button>
    </div>
  )
}