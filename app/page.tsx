import Image from "next/image";
import Sections from "./components/sections";
import Sections2 from "./components/section2";
import StockCard from "./components/stockCard";
import StampCard from "./components/stampCard";
import ProposalCard from "./components/proposalCard";
import FriendsStackedCard from "./components/friendCard";
import RebalanceTimer from "./components/rebalanceTimer";
import RebalanceTimerStatic from "./components/rebalanceTimerStatic";
import Sections3 from "./components/section3";
import Cta from "./components/cta";
import PortfolioCard from "./components/portfolioCard";


export default function Home() {
  return (
    <div className="min-h-screen text-zinc-900  overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 xl:px-10 py-5 relative z-30 mt-6">
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

      <section className="w-full pt-10 bg-white mt-4 pb-36 overflow-hidden" style={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }}>

        {/* Headline */}
        <div className="z-10 px-10 flex flex-col xl:flex-row">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-black">
              Complete{" "}
              <br />
              earn rewards.
              <br />
              with Gigpec.
            </h1>
            <p className="text-gray-400 text-base leading-relaxed max-w-md mt-6">
              Turn your free time into value. Earn real rewards by completing simple gigs with Gigcep.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row ml-0 xl:ml-6 mt-6 xl:mt-3 items-center xl:items-start">
            <div className="-rotate-6 -ml-5 xl:ml-0">
              <StampCard />
            </div>
            <div className="ml-4 mt-2 rotate-3">
              <StockCard />
            </div>
            <div className="relative ml-0 xl:ml-3 w-72 h-64 xl:h-auto">
              <div className="absolute rotate-12 -ml-5 xl:ml-0">
                <ProposalCard />
              </div>
              <div className="absolute -left-10 xl:left-0 xl:right-0 -rotate-12 mt-20">
                <FriendsStackedCard />
              </div>
              <div className="absolute top-24 xl:top-30 ml-24 xl:ml-42 -rotate-20">
                <RebalanceTimerStatic />
              </div>
              <div className="absolute -rotate-40 left-44 xl:left-80 mt-20 xl:mt-0">
                <PortfolioCard />
              </div>
            </div>
          </div>
        </div>

        {/* Phone Mockup — single, large, centered */}
        <div className="hidden lg:flex justify-center mt-40 w-full">
          <Image
            src="/kadi.png"
            alt="App screen - Home"
            width={1200}
            height={1200}
            priority
            unoptimized
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col gap-y-26 w-full px-6 lg:px-16 py-24 -mt-5" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
              Everything you need to start earning.
            </h2>
          </div>
          <Sections />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
              Everything you need to start earning.
            </h2>
          </div>
          <Sections2 />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
              Everything you need to start earning.
            </h2>
          </div>
          <Sections3 />
        </div>
      </section>

      <div className="flex justify-center p-6" style={{ backgroundColor: "#222121" }}>
        <Cta />
      </div>
    </div>
  );
}
