import React from 'react'
import StockCard from './stockCard'
import StampCard from './stampCard'
import StockCardSingle from './simpleStockCard'

const Cta = () => {
    return (
        <>
            <div className='flex flex-col xl:flex-row w-max h-max bg-white rounded-2xl overflow-hidden mt-26'>

                <div className='w-1/4 flex flex-row xl:flex-col gap-y-22'>
                    <div className='p-2 -mt-16 ml-0 xl:-ml-33 -rotate-6'>
                        <StampCard />
                    </div>
                    <div className='p-2 -mt-12 ml-0 xl:-ml-28'>
                        <StampCard />
                    </div>
                    <div className='p-2 -mt-8 ml-0 xl:-ml-33 rotate-12'>
                        <StampCard />
                    </div>
                    <div className='p-2 -mt-8 ml-0 xl:-ml-33 rotate-12'>
                        <StampCard />
                    </div>
                </div>
                <div className='flex items-center justify-center w-2/4 my-6 xl:my-0 w-full ml-0 xl:ml-10'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h1 className='text-7xl font-semibold text-center'>
                            Join Our Waitlist
                        </h1>
                        <div className='flex flex-col gap-y-4 xl:flex-row items-center gap-2 w-full mt-4'>
                            <input
                                type='email'
                                placeholder='your@email.com'
                                className='flex-1 px-4 py-3 rounded-full border border-gray-300 outline-none text-base'
                            />
                            <button className='px-6 py-3 bg-black text-white rounded-full text-base font-semibold whitespace-nowrap hover:bg-gray-800 transition-colors'>
                                Join Waitlist
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-1/4 flex flex-row  xl:flex-col xl:overflow-hidden gap-10 mt-10 xl:mt-0 ml-1 lg:ml-10'>
                        <div className='ml-0 xl:ml-16 -mt-3 -rotate-12 xl:-rotate-30 mt-0 -mt-10'>
                            <StockCardSingle />
                        </div>
                        <div className='ml-0 xl:ml-10 mt-0 xl:mt-2 -rotate-40 xl:rotate-0'>
                            <StockCardSingle />
                        </div>
                        <div className='ml-0 xl:ml-16 mt-0 xl:mt-8 rotate-0'>
                            <StockCardSingle />
                        </div>
                         <div className='ml-0 xl:ml-16 mt-0 xl:mt-8 -rotate-25'>
                            <StockCardSingle />
                        </div>
                </div>
            </div>
        </>
    )
}

export default Cta