
const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Top Banner*/}
      <div className="w-full bg-linear-to-r from-green-900 via-green-800 to-green-700 flex items-center justify-center gap-3 px-4 py-2.5 text-center">
        <span className="text-lg">🐄</span>
        <p className="text-sm font-medium text-green-100">
          <strong className="text-white">Eid ul Adha 2025</strong> — Book your Qurbani animal from verified sellers across Bangladesh
        </p>
        <span className="hidden sm:inline text-xs font-semibold tracking-widest uppercase bg-white/20 border border-white/30 text-white px-3 py-1 rounded-full">
          Live now
        </span>
      </div>

      {/*Hero*/}
      <div
        className="hero flex-1"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=1200&q=80)",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="hero-overlay" style={{ background: "linear-gradient(to top, rgba(5,15,5,0.95) 0%, rgba(5,15,5,0.6) 50%, rgba(5,15,5,0.25) 100%)" }} />
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <p className="text-xs tracking-widest uppercase text-green-400 mb-4 flex items-center justify-center gap-2">
              <span className="w-7 h-px bg-green-400 opacity-60" />
              Vet-checked · Verified sellers · Instant booking
              <span className="w-7 h-px bg-green-400 opacity-60" />
            </p>
            <h1 className="text-5xl not-md:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Book your <em className="italic text-green-300">Qurbani</em><br />animal with confidence
            </h1>
            <p className="text-base opacity-65 mb-8 max-w-md mx-auto leading-relaxed">
              Browse cows and goats from trusted sellers across Bangladesh. View full details and place your booking in minutes.
            </p>
            <div className="flex flex-col items-center gap-2">
              <a href="/allanimals" className="btn btn-success btn-lg gap-2 animate-pulse">
                🔍 Browse animals
              </a>
              <span className="text-xs opacity-40">Animals available · No account needed to browse</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Hero;