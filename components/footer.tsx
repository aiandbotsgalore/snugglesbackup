"use client"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-b from-black via-slate-900 to-black border-t-2 border-blue-400 py-8 overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
            animation: "grid-drift 15s linear infinite",
          }}
        />
      </div>

      {/* Animated scanner lines */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            {/* Enhanced logo section */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/10 rounded-lg blur-sm animate-pulse" />
              <div className="relative bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-6 py-3">
                <p className="text-cyan-400 font-mono uppercase tracking-widest font-bold text-lg">
                  SNUGGLES ARCHIVE
                </p>
                <p className="text-blue-400 font-mono uppercase tracking-wider text-sm">
                  Cognitive Anomaly Division
                </p>
                
                {/* Status indicators */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs font-mono">SYSTEM ONLINE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced return button */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-sm animate-pulse" />
            <button
              onClick={scrollToTop}
              className="group relative bg-black border-2 border-blue-400 text-blue-400 hover:bg-blue-400/20 px-8 py-4 font-mono uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/50 hover:-translate-y-1 rounded-lg"
            >
              {/* Animated border rings */}
              <div className="absolute inset-0 border border-blue-300 rounded-lg animate-ping opacity-0 group-hover:opacity-30" />
              
              <div className="flex items-center gap-3">
                <span className="text-xl animate-bounce">🚀</span>
                <span className="font-bold">Return to Surface</span>
              </div>
              
              {/* Hover scanning effect */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-400 opacity-0 group-hover:opacity-100 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 opacity-0 group-hover:opacity-100 animate-pulse" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800 text-center relative">
          {/* Enhanced copyright section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/50 to-transparent h-px top-1/2 transform -translate-y-1/2" />
            <div className="relative bg-black px-6">
              <p className="text-gray-500 text-sm font-mono">
                © 2024 Snuggles Archive. All cognitive anomalies reserved.
              </p>
              
              {/* System status */}
              <div className="flex items-center justify-center gap-4 mt-2 text-xs font-mono text-gray-600">
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                  THREAT LEVEL: MAXIMUM
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse" />
                  ANOMALY STATUS: ACTIVE
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse" />
                  BELIEFS: COMPROMISED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
      `}</style>
    </footer>
  )
}