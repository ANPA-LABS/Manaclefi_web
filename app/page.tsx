import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 relative z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L15 6V12L9 16L3 12V6L9 2Z" fill="white" opacity="0.95" />
            </svg>
          </div>
          <span className="text-zinc-900 font-semibold tracking-tight text-lg">Gigcep</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
          <a href="#" className="hover:text-zinc-900 transition-colors">Home</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">How It Works?</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">FAQ</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm text-zinc-700 hover:text-zinc-900 px-4 py-2 rounded-lg border border-zinc-300 hover:border-zinc-500 transition-all">
            Log In
          </button>
          <button className="text-sm text-white bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-lg font-medium transition-all">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full px-16 pt-20">
        {/* Headline */}
        <div className="relative z-10 max-w-[700px]">
          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-zinc-900">
            Complete{" "}
            <em className="text-zinc-400 not-italic font-bold">gigs</em>
            , earn
            <br />
            rewards with Gigcep.
          </h1>
          <p className="text-zinc-600 text-base leading-relaxed max-w-md mt-6">
            Turn your free time into value. Earn real rewards by completing simple gigs with Gigcep.
          </p>
        </div>

        {/* Phone Mockup — single, large, centered */}
        <div className="relative z-20 mt-4 flex items-end justify-center">
          <div
            className="flex-shrink-0 relative"
            style={{
              width: "1200px",
              filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.15))",
            }}
          >
            <Image
              src="/kadi.png"
              alt="App screen - Home"
              width={2400}
              height={6000}
              className="w-full h-auto object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative w-full px-16 py-24 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
              Everything you need to start earning.
            </h2>
            <p className="text-zinc-600 text-base mt-4 leading-relaxed">
              From simple daily missions to streak bonuses — Gigcep packs every reward path into one app.
            </p>
          </div>

          {/* Cards row — left: 1 tall card, right: 2 stacked cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Left: single tall card — soft lavender */}
            <div
              className="rounded-3xl p-10 flex flex-col gap-8 h-[600px]"
              style={{ backgroundColor: "#cdc4f5" }}
            >
              <div>
                <h3 className="text-zinc-900 font-semibold text-2xl leading-tight tracking-tight">
                  Complete daily gigs in seconds.
                </h3>
                <p className="text-zinc-700 text-base mt-3 leading-relaxed max-w-md">
                  Quick missions designed for spare moments — earn rewards while you wait, walk, or wind down.
                </p>
              </div>
              <div
                className="flex-shrink-0 relative"
                style={{
                  width: "570px",
                  filter: "",
                }}
              >
                <Image
                  src="/shak.png"
                  alt="App screen - Home"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Right: two stacked equal cards */}
            <div className="grid grid-rows-2 gap-5 h-[600px]">
              {/* Top right — dark charcoal */}
              <div
                className="rounded-3xl p-8 flex gap-6 items-center"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-xl leading-tight tracking-tight">
                    Track points & streaks.
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                    See your progress build up day by day.
                  </p>
                </div>
                <div
                  className="flex-shrink-0 relative"
                  style={{
                    width: "370px",
                    filter: "",
                  }}
                >
                  <Image
                    src="/hmm.png"
                    alt="App screen - Home"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              <div
                className="rounded-3xl p-8 flex gap-6 items-center"
                style={{ backgroundColor: "#ece4d6" }}
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-xl leading-tight tracking-tight">
                    Track points & streaks.
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                    See your progress build up day by day.
                  </p>
                </div>
                <div
                  className="flex-shrink-0 relative"
                  style={{
                    width: "370px",
                    filter: "",
                  }}
                >
                  <Image
                    src="/hmm.png"
                    alt="App screen - Home"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              {/* Bottom right — soft cream */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}