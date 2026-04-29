import Image from "next/image";
import Sections from "./components/sections";
import Sections2 from "./components/section2";

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-900  overflow-hidden" style={{ backgroundColor: "#222121" }}>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 relative z-30 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L15 6V12L9 16L3 12V6L9 2Z" fill="white" opacity="0.95" />
            </svg>
          </div>
          <span className="text-white font-semibold tracking-tight text-3xl">Gigcep</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-md font-medium text-gray-500">
          <a href="#" className="hover:text-zinc-900 transition-colors">Home</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">How It Works?</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">FAQ</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Contact</a>
        </div>


      </nav>

      {/* Hero Section */}
      <section className="relative w-full pt-10 bg-white mt-4" style={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }}>

        {/* Headline */}
        <div className="relative z-10 px-10 bg-blue-100 flex flex-row">
          <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-black">
            Complete{" "}
            <em className="text-zinc-400 not-italic font-bold">gigs</em>
            , earn
            <br />
            rewards with Gigcep.
          </h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-md mt-6">
            Turn your free time into value. Earn real rewards by completing simple gigs with Gigcep.
          </p>
          </div>
          <Image
          src={"/testing.png"}
          height={1000}
          width={1000}
          alt=""
          />
        </div>

        {/* Phone Mockup — single, large, centered */}
        <div className="relative z-20 flex items-end justify-center">
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
      <section className="relative flex flex-col gap-y-26 w-full px-16 py-24 border-t border-zinc-100" style={{ backgroundColor: "#222121" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Everything you need to start earning.
            </h2>
          </div>
          <Sections />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Everything you need to start earning.
            </h2>
          </div>
          <Sections2 />
        </div>
      </section>
    </div>
  );
}
