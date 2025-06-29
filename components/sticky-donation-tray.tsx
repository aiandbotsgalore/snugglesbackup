"use client"
import { useEffect, useRef, useState } from "react"

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

// Sticky tray component
export function StickyDonationTray() {
  const [visible, setVisible] = useState(false)
  const [donors, setDonors] = useState(17)
  const trayRef = useRef<HTMLDivElement>(null)

  // Show tray when hero is out of view
  useEffect(() => {
    function onScroll() {
      const hero = document.querySelector("section")
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      setVisible(rect.bottom < 0)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Animate donors count for demo
  useEffect(() => {
    const id = setInterval(() => {
      setDonors((d) => (d < 25 ? d + (Math.random() > 0.8 ? 1 : 0) : d))
    }, 5000)
    return () => clearInterval(id)
  }, [donors])

  // Animate in/out
  useEffect(() => {
    if (trayRef.current) {
      trayRef.current.style.transform = visible ? "translateY(0)" : "translateY(120%)"
      trayRef.current.style.opacity = visible ? "1" : "0"
    }
  }, [visible])

  // Handle confetti burst and donations
  function handleStripe(e: React.MouseEvent) {
    const x = e.clientX, y = e.clientY
    launchConfetti(x, y)
    window.open("https://donate.stripe.com/3cI5kC7jm7mC8LKerv6EU00", "_blank", "noopener")
  }

  function handleCashApp(e: React.MouseEvent) {
    const x = e.clientX, y = e.clientY
    launchConfetti(x, y)
    window.open("https://cash.app/$fullstacklogan", "_blank", "noopener")
  }

  function handleBuyMeACoffee(e: React.MouseEvent) {
    const x = e.clientX, y = e.clientY
    launchConfetti(x, y)
    window.open("https://buymeacoffee.com/fullstacklogan", "_blank", "noopener")
  }

  return (
    <div
      ref={trayRef}
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100vw",
        background: "rgba(20,20,20,0.96)",
        borderTop: "3px solid #00ff00",
        boxShadow: "0 -4px 32px #00ff0055",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "1.2rem 2rem",
        transition: "transform 0.5s cubic-bezier(.7,1.5,.5,1), opacity 0.5s",
        opacity: 0,
        transform: "translateY(120%)",
      }}
      aria-live="polite"
      aria-label="Quick donation bar"
    >
      <button
        onClick={handleStripe}
        style={{
          background: "#000",
          border: "3px solid #00ff00",
          color: "#00ff00",
          fontWeight: 900,
          fontFamily: 'Courier New, monospace',
          borderRadius: 8,
          padding: "1rem 2rem",
          fontSize: "1.1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          boxShadow: "0 0 15px #00ff0040",
          cursor: "pointer",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
        aria-label="Donate via Stripe"
      >
        <span style={{ fontSize: 24 }}>⚡</span>
        <span>STRIPE DONATE</span>
      </button>

      <button
        onClick={handleCashApp}
        style={{
          background: "#000",
          border: "3px solid #22c55e",
          color: "#22c55e",
          fontWeight: 900,
          fontFamily: 'Courier New, monospace',
          borderRadius: 8,
          padding: "1rem 2rem",
          fontSize: "1.1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          boxShadow: "0 0 15px #22c55e40",
          cursor: "pointer",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
        aria-label="Donate via CashApp"
      >
        <span style={{ fontSize: 24 }}>💸</span>
        <span>CASHAPP</span>
      </button>

      <button
        onClick={handleBuyMeACoffee}
        style={{
          background: "#000",
          border: "3px solid #ff6600",
          color: "#ff6600",
          fontWeight: 900,
          fontFamily: 'Courier New, monospace',
          borderRadius: 8,
          padding: "1rem 2rem",
          fontSize: "1.1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          boxShadow: "0 0 15px #ff660040",
          cursor: "pointer",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
        aria-label="Buy me a coffee"
      >
        <span style={{ fontSize: 24 }}>☕</span>
        <span>COFFEE</span>
      </button>
      
      <span style={{ color: "#3b82f6", fontWeight: 700, fontFamily: 'monospace', fontSize: "1.1rem", marginLeft: 16 }}>
        <span style={{ fontSize: "1.3rem", marginRight: 6 }}>👥</span>
        {donors} donors today
      </span>
    </div>
  )
}