import Image from 'next/image'
import React from 'react'

const Sections3 = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-max">
                {/* Left: single tall card — soft lavender */}
                <div
                    className="rounded-3xl px-6 xl:px-10 py-7  flex flex-col gap-8 h-max"
                    style={{ backgroundColor: "#6B9CF4" }}
                >
                    <div>
                        <h3 className="text-zinc-900 font-bold text-3xl leading-tight tracking-tight">
                           Every token, every move, every member.
                        </h3>
                        {/* <p className="text-gray-100  text-base mt-1 leading-relaxed max-w-md">
                            Quick missions designed for spare moments — earn rewards while you wait, walk, or wind down.
                        </p> */}
                    </div>
                    <div className='flex justify-center w-full -mt-3'>

                        <div
                            className="mt-5 w-[5000px] xl:w-[400px]"
                        >
                            <Image
                                src="/C1L.png"
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
                        style={{ backgroundColor: "#27E97C" }}
                    >
                        <div className="w-1/2 w-full p-4">
                            <h3 className="text-black font-bold text-3xl leading-tight tracking-tight mt-3">
                                Your conditions. Your triggers. On autopilot.
                            </h3>
                            
                        </div>
                        <div
                            className="w-1/2 w-fit xl:w-[500px]"
                        >
                            <Image
                                src="/C1R1.png"
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
                        className="flex flex-col-reverse xl:flex-col items-end xl:flex-row rounded-3xl flex gap-6 overflow-hidden px-1 h-max"
                        style={{ backgroundColor: "#E2DFFD" }}
                    >
                        <div className="w-1/2 w-full p-4">
                            <h3 className="text-black font-bold text-3xl leading-tight tracking-tight mb-3">
                                Your family, friends, and circle — all investing together.
                            </h3>
                        </div>
                        <div
                            className="w-1/2 w-fit xl:w-[500px]"
                        >
                            <Image
                                src="/C1R2.png"
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

export default Sections3