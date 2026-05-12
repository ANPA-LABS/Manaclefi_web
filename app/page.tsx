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
import Sections4 from "./components/section4";


export default function Home() {
  return (
    <div className="min-h-screen text-zinc-900  overflow-hidden">
      {/* Navbar */}
     
        <div className="flex flex-row items-center justify-center xl:justify-start px-8 gap-1.5 py-3">
          <div>
            <Image
              width={100}
              height={100}
              src={"/logo.png"}
              alt="frontimage"
              className="rounded-xl"
            />
          </div>
          <div className="mt-1">
          <h1 className="text-white font-semibold tracking-tight text-5xl lg:text-5xl mt-2">Manacle</h1>
          </div>
        </div>
    

      <section className="w-full pt-10 bg-white mt-4 pb-36 overflow-hidden" style={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }}>

        {/* Headline */}
        <div className="z-10 px-10 flex flex-col xl:flex-col">
          <div className="flex flex-col justify-center items-center  text-center">
            <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-black">
               Your Money{" "}
              <br />
              Your Rules
              <br />
              Your People.
            </h1>
            <div>
              <p className="text-gray-400 text-base leading-relaxed max-w-md mt-3 text-center">
                Trade, invest and earn yield on autopilot, on your rules with your people
              </p>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row ml-0 xl:-ml-80 mt-12 xl:mt-16 justify-center items-center xl:items-center">
            <div className="-rotate-6">
              <StampCard />
            </div>
            <div className="ml-4 mt-2 rotate-3">
              <StockCard />
            </div>
            <div className="relative ml-0 xl:ml-3 w-72 h-64">
              <div className="absolute rotate-12 -ml-5 xl:ml-0">
                <ProposalCard />
              </div>
              <div className="absolute -left-10 xl:left-0 xl:right-0 -rotate-12 mt-20">
                <FriendsStackedCard />
              </div>
              <div className="absolute top-24 xl:top-30 ml-24 xl:ml-42 -rotate-20">
                <RebalanceTimer />
              </div>
              <div className="absolute -rotate-40 xl:-rotate-30 left-44 xl:left-75 mt-20 xl:mt-0">
                <PortfolioCard variant="silver" />
              </div>
            </div>
          </div>
        </div>

        {/* Phone Mockup — single, large, centered */}
        <div className="hidden lg:flex justify-center mt-45 xl:mt-30 w-full">
          <Image
            src="/front.png"
            alt="App screen - Home"
            width={1100}
            height={1100}
            priority
            unoptimized
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col gap-y-26 w-full px-6 py-16 -mt-5" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
              Built for how you actually invest.
            </h2>
          </div>
          <Sections />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
              Everything you need to put money to work.
            </h2>
          </div>
          <Sections2 />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
              Your portfolio. Your rules. Your people.
            </h2>
          </div>
          <Sections3 />
        </div>

        <div className="max-w-7xl mx-auto mb-10">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
              Buckle up, there's more.
            </h2>
          </div>
          <Sections4 />
        </div>
      </section>

      <div className="flex justify-center p-4 xl:p-6" style={{ backgroundColor: "#222121" }}>
        <Cta />
      </div>
    </div>
  );
}
