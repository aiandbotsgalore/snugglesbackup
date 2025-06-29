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

  for (let i = 0; i < 22; i++) {
    const el = document.createElement("span")
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)]
    el.style.position = "absolute"
    el.style.left = `${x + (Math.random() - 0.5) * 40}px`
    el.style.top = `${y + (Math.random() - 0.5) * 20}px`
    el.style.fontSize = `${Math.random() * 16 + 24}px`
    el.style.color = colors[Math.floor(Math.random() * colors.length)]
    el.style.transition = "transform 1s cubic-bezier(.4,2,.3,1), opacity 1s"
    el.style.opacity = "1"
    confettiRoot.appendChild(el)
    setTimeout(() => {
      el.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${-Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`
      el.style.opacity = "0"
    }, 20)
  }
  setTimeout(() => confettiRoot.remove(), 1200)
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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 flex flex-col gap-3 animate-in slide-in-from-bottom-2 duration-300">
          {/* Stripe Button */}
          <button
            onClick={handleStripe}
            className="group bg-black border-3 border-green-400 text-green-400 hover:bg-green-400/20 px-4 py-3 font-mono uppercase tracking-wider transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-400/50 rounded-lg flex items-center gap-3 min-w-[200px]"
          >
            <span className="text-xl animate-pulse">⚡</span>
            <span className="font-black">STRIPE DONATE</span>
          </button>

          {/* CashApp Button */}
          <button
            onClick={handleCashApp}
            className="group bg-black border-3 border-green-500 text-green-500 hover:bg-green-500/20 px-4 py-3 font-mono uppercase tracking-wider transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/50 rounded-lg flex items-center gap-3 min-w-[200px]"
          >
            <span className="text-xl">💸</span>
            <span className="font-black">CASHAPP</span>
          </button>

          {/* Buy Me a Coffee Button */}
          <button
            onClick={handleBuyMeACoffee}
            className="group bg-black border-3 border-orange-400 text-orange-400 hover:bg-orange-400/20 px-4 py-3 font-mono uppercase tracking-wider transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-orange-400/50 rounded-lg flex items-center gap-3 min-w-[200px]"
          >
            <span className="text-xl">☕</span>
            <span className="font-black">BUY COFFEE</span>
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`group relative bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isExpanded ? 'rotate-45' : 'hover:rotate-12'
        }`}
        style={{
          boxShadow: "0 8px 32px rgba(34, 197, 94, 0.4), 0 0 0 1px rgba(34, 197, 94, 0.2)",
          animation: "pulse-glow 2s ease-in-out infinite",
        }}
        aria-label="Donation options"
      >
        <div className="relative">
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full bg-green-400/30 animate-ping" />
          
          {/* Main icon */}
          <div className="relative text-2xl font-black">
            {isExpanded ? '✕' : '💰'}
          </div>
          
          {/* Notification badge */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
            !
          </div>
        </div>
      </button>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 8px 32px rgba(34, 197, 94, 0.4), 0 0 0 1px rgba(34, 197, 94, 0.2);
          }
          50% {
            box-shadow: 0 12px 40px rgba(34, 197, 94, 0.6), 0 0 0 1px rgba(34, 197, 94, 0.4);
          }
        }
      `}</style>
    </div>
  )
}