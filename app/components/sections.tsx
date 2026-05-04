import Image from 'next/image'
import React from 'react'

const Sections = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Left: single tall card — soft lavender */}
                <div
                    className="rounded-3xl px-6 xl:px-10 py-7  flex flex-col gap-8 h-max"
                    style={{ backgroundColor: "#B5A9F3" }}
                >
                    <div>
                        <h3 className="text-zinc-900 font-bold text-3xl leading-tight tracking-tight mt-2">
                            Everything that matters, right up front.
                        </h3>
                        {/* <p className="text-gray-600  text-base mt-1 leading-relaxed max-w-md">
                            Quick missions designed for spare moments — earn rewards while you wait, walk, or wind down.
                        </p> */}
                    </div>
                    <div className='flex justify-center w-full mt-0 xl:mt-4'>

                        <div
                            className="mt-5 w-fit xl:w-[400px]"
                        >
                            <Image
                                src="/A1L.png"
                                alt="App screen - Home"
                                width={100}
                                height={100}
                                className="w-full h-auto object-contain"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

                {/* Right: two stacked equal cards */}
                <div className="grid grid-rows-2 gap-5 h-max">
                    {/* Top right — dark charcoal */}
                    <div
                        className="flex flex-col xl:flex-row rounded-3xl flex gap-6 overflow-hidden px-1 h-max"
                        style={{ backgroundColor: "#ECFB75" }}
                    >
                        <div className="w-1/2 w-full p-4">
                            <h3 className="text-black font-bold text-3xl leading-tight tracking-tight mt-3">
                                Never miss a move — from the market or your circle.
                            </h3>
                        </div>
                        <div
                            className="w-1/2 w-fit xl:w-[500px]"
                        >
                            <Image
                                src="/A1R1.png"
                                alt="App screen - Home"
                                width={100}
                                height={100}
                                className="w-full h-auto object-contain"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>

                    <div
                        className="flex flex-col xl:flex-row  rounded-3xl flex gap-6 overflow-hidden px-1 h-max"
                        style={{ backgroundColor: "#ece4d6" }}
                    >
                        <div className="w-1/2 w-full p-4">
                            <h3 className="text-black font-bold text-3xl leading-tight tracking-tight mt-3">
                                Your portfolio's full story, in one place.
                            </h3>
                        </div>
                        <div
                            className="w-1/2 w-fit xl:w-[500px]"
                        >
                            <Image
                                src="/A1R2.png"
                                alt="App screen - Home"
                                width={100}
                                height={100}
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

export default Sections