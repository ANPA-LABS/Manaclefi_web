import React from 'react'
import StockCard from './stockCard'
import StampCard from './stampCard'
import StockCardSingle from './simpleStockCard'

const Cta = () => {
    return (
        <>
            <div className='flex flex-row w-[1050px] h-[450px] bg-white rounded-2xl overflow-hidden mt-26'>

                <div className='w-1/4 flex flex-col gap-y-16 overflow-hidden'>
                    <div className='p-2 -mt-16 -ml-33 -rotate-6'>
                        <StampCard />
                    </div>
                    <div className='p-2 -mt-12 -ml-28'>
                        <StampCard />
                    </div>
                    <div className='p-2 -mt-12 -ml-33 rotate-6'>
                        <StampCard />
                    </div>
                </div>
                <div className='flex items-center justify-center w-2/4'>
                    <div className='flex flex-col items-center w-full gap-4'>
                        <h1 className='text-7xl font-semibold text-center'>
                            Join Our Waitlist
                        </h1>
                        <div className='flex items-center gap-2 w-full max-w-md mt-4'>
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
                <div className='w-1/4 flex flex-col overflow-hidden gap-y-4'>
                    <div className='ml-33 -mt-3 -rotate-6 -mt-10'>
                        <StockCardSingle />
                    </div>
                    <div className='ml-28 mt-2'>
                        <StockCardSingle />
                    </div>
                    <div className='ml-33 mt-3 rotate-6'>

                        <StockCardSingle />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cta