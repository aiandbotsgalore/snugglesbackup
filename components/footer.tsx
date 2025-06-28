"use client"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black border-t-2 border-blue-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-cyan-400 font-mono uppercase tracking-widest font-bold text-lg">SNUGGLES ARCHIVE</p>
            <p className="text-blue-400 font-mono uppercase tracking-wider text-sm">Cognitive Anomaly Division</p>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-black border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 py-3 font-mono uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50 hover:-translate-y-1"
          >
            Return to Surface
          </button>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm font-mono">© 2024 Snuggles Archive. All cognitive anomalies reserved.</p>
        </div>
      </div>
    </footer>
  )
}
