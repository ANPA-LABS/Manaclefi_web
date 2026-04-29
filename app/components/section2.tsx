import Image from 'next/image'
import React from 'react'

const Sections2 = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Left: single tall card — soft lavender */}
                <div
                    className="rounded-3xl p-10 flex flex-col gap-8 h-[600px]"
                    style={{ backgroundColor: "#FB8767" }}
                >
                    <div>
                        <h3 className="text-zinc-900 font-bold text-3xl leading-tight tracking-tight">
                            Complete daily gigs in seconds.
                        </h3>
                        <p className="text-gray-100  text-base mt-1 leading-relaxed max-w-md">
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
                            src="/DA1.png"
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
                        className="flex flex-row rounded-3xl flex gap-6 overflow-hidden"
                        style={{ backgroundColor: "#FFDADC" }}
                    >
                        <div className="w-1/2 w-full p-4">
                            <h3 className="text-black font-bold text-3xl leading-tight tracking-tight mt-3">
                                Track points & streaks.
                            </h3>
                            <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                                See your progress build up day by day.
                            </p>
                        </div>
                        <div
                            className="w-1/2 flex-shrink-0 mt-6"
                            style={{
                                width: "370px",
                                filter: "",
                            }}
                        >
                            <Image
                                src="/DA1B12.png"
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
                        className="flex flex-row rounded-3xl flex gap-6 overflow-hidden"
                        style={{ backgroundColor: "#E9E8EA" }}
                    >
                        <div className="w-1/2 w-full p-4">
                            <h3 className="text-black font-bold text-3xl leading-tight tracking-tight mt-3">
                                Track points & streaks.
                            </h3>
                            <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                                See your progress build up day by day.
                            </p>
                        </div>
                        <div
                            className="w-1/2 flex-shrink-0 mt-6"
                            style={{
                                width: "370px",
                                filter: "",
                            }}
                        >
                            <Image
                                src="/DA1B22.png"
                                alt="App screen - Home"
                                width={600}
                                height={600}
                                className="w-full h-auto object-contain"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sections2