import Image from 'next/image'
import React from 'react'

const Sections4 = () => {
    return (
        <>
            <div className="h-max">

                {/* Right: two stacked equal cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-max">
                    {/* Top right — dark charcoal */}
                    <div
                        className="flex flex-col xl:flex-row rounded-3xl flex gap-6 overflow-hidden px-1 h-max"
                        style={{ backgroundColor: "#d0f2d5" }}
                    >
                        <div className="w-1/2 w-full p-4">
                            <h3 className="text-black font-bold text-4xl leading-tight tracking-tight mt-3">
                                Track points and streaks.
                            </h3>
                            <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                                See your progress build up day by day.
                            </p>
                        </div>
                        <div
                            className="w-1/2 w-fit xl:w-[500px]"
                        >
                            <Image
                                src="/DL1.png"
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
                        className="flex flex-col-reverse xl:flex-col xl:flex-row rounded-3xl flex gap-6 overflow-hidden px-1 h-max items-end"
                        style={{ backgroundColor: "#f8d561" }}
                    >
                        <div className="w-1/2 w-full p-4">
                            <h3 className="text-black font-bold text-4xl leading-tight tracking-tight mb-3">
                                Track points and streaks.
                            </h3>
                            <p className="text-gray-700 text-sm mb-2 leading-relaxed">
                                See your progress build up day by day.
                            </p>
                        </div>
                        <div
                            className="w-1/2 w-fit xl:w-[500px]"
                        >
                            <Image
                                src="/DL2.png"
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
                        className="flex flex-col-reverse xl:flex-col xl:flex-row rounded-3xl flex gap-6 overflow-hidden px-1 h-max items-end"
                        style={{ backgroundColor: "#f58688" }}
                    >
                        <div className="w-1/2 w-full p-4">
                            <h3 className="text-black font-bold text-4xl leading-tight tracking-tight mb-3">
                                Track points and streaks.
                            </h3>
                            <p className="text-gray-700 text-sm mb-2 leading-relaxed">
                                See your progress build up day by day.
                            </p>
                        </div>
                        <div
                            className="w-1/2 w-fit xl:w-[500px]"
                        >
                            <Image
                                src="/DR1.png"
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
                        className="flex flex-col-reverse xl:flex-col xl:flex-row rounded-3xl flex gap-6 overflow-hidden px-1 h-max items-end"
                        style={{ backgroundColor: "#F3D5E6" }} 
                    >
                        <div className="w-1/2 w-full p-4">
                            <h3 className="text-black font-bold text-4xl leading-tight tracking-tight mb-3">
                                Track points and streaks.
                            </h3>
                            <p className="text-gray-700 text-sm mb-2 leading-relaxed">
                                See your progress build up day by day.
                            </p>
                        </div>
                        <div
                            className="w-1/2 w-fit xl:w-[500px]"
                        >
                            <Image
                                src="/DR2.png"
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

export default Sections4