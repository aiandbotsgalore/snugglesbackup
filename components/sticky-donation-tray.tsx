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

// Animated progress glyph
function ProgressGlyph({ percent }: { percent: number }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48">
      <circle
        cx="24" cy="24" r="20"
        stroke="#222"
        strokeWidth="6"
        fill="none"
      />
      <circle
        cx="24" cy="24" r="20"
        stroke="#00ff00"
        strokeWidth="6"
        fill="none"
        strokeDasharray={Math.PI * 40}
        strokeDashoffset={Math.PI * 40 * (1 - percent / 100)}
        style={{ transition: "stroke-dashoffset 1s cubic-bezier(.5,1.5,.5,1)" }}
      />
      <text x="24" y="28" textAnchor="middle" fontSize="16" fill="#00ff00" fontWeight="bold">
        {percent}%
      </text>
    </svg>
  )
}

// Sticky tray component
export function StickyDonationTray() {
  const [visible, setVisible] = useState(false)
  const [donors, setDonors] = useState(17)
  const [goal, setGoal] = useState(25)
  const [progress, setProgress] = useState(68)
  const trayRef = useRef<HTMLDivElement>(null)

  // Show tray when hero is out of view
  useEffect(() => {
    function onScroll() {
      const hero = document.querySelector(".hero-section")
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
      setDonors((d) => (d < goal ? d + (Math.random() > 0.7 ? 1 : 0) : d))
      setProgress(Math.round((donors / goal) * 100))
    }, 4000)
    return () => clearInterval(id)
  }, [donors, goal])

  // Animate in/out
  useEffect(() => {
    if (trayRef.current) {
      trayRef.current.style.transform = visible ? "translateY(0)" : "translateY(120%)"
      trayRef.current.style.opacity = visible ? "1" : "0"
    }
  }, [visible])

  // Handle confetti burst
  function handleDonate(url: string, e: React.MouseEvent) {
    const x = e.clientX, y = e.clientY
    launchConfetti(x, y)
    window.open(url, "_blank", "noopener")
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
        borderTop: "3px solid #3b82f6",
        boxShadow: "0 -4px 32px #3b82f655",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
        padding: "1.2rem 2rem",
        transition: "transform 0.5s cubic-bezier(.7,1.5,.5,1), opacity 0.5s",
        opacity: 0,
        transform: "translateY(120%)",
      }}
      aria-live="polite"
      aria-label="Quick donation bar"
    >
      <button
        onClick={e => handleDonate("https://cash.app/$FullStackLogan", e)}
        style={{
          background: "#000",
          border: "3px solid #00ff00",
          color: "#00ff00",
          fontWeight: 900,
          fontFamily: 'Courier New, monospace',
          borderRadius: 8,
          padding: "1rem 2.5rem 1rem 1rem",
          fontSize: "1.2rem",
          display: "flex",
          alignItems: "center",
          gap: ".8rem",
          boxShadow: "0 0 12px #00ff0040",
          cursor: "pointer",
          position: "relative",
          minWidth: 160,
        }}
        aria-label="Donate via Cash App"
      >
        <span style={{ position: "relative", display: "inline-block" }}>
          <ProgressGlyph percent={progress} />
          <span style={{ position: "absolute", top: 8, left: 8, fontSize: 22 }}>⚡</span>
        </span>
        <span>Cash App</span>
      </button>
      <button
        onClick={e => handleDonate("https://buymeacoffee.com/fullstacklogan", e)}
        style={{
          background: "#000",
          border: "3px solid #ff6600",
          color: "#ff6600",
          fontWeight: 900,
          fontFamily: 'Courier New, monospace',
          borderRadius: 8,
          padding: "1rem 2.5rem 1rem 1rem",
          fontSize: "1.2rem",
          display: "flex",
          alignItems: "center",
          gap: ".8rem",
          boxShadow: "0 0 12px #ff660040",
          cursor: "pointer",
          minWidth: 160,
        }}
        aria-label="Donate via Buy Me a Coffee"
      >
        <span style={{ fontSize: 28 }}>☕</span>
        <span>Buy Me a Coffee</span>
      </button>
      <span style={{ color: "#3b82f6", fontWeight: 700, fontFamily: 'monospace', fontSize: "1.1rem", marginLeft: 24 }}>
        <span style={{ fontSize: "1.5rem", marginRight: 8 }}>👥</span>
        {donors} donors today
      </span>
    </div>
  )
}
