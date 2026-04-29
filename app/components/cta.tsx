import React from 'react'
import StockCard from './stockCard'
import StampCard from './stampCard'
import StockCardSingle from './simpleStockCard'

const Cta = () => {
    return (
        <>
            <div className='flex flex-row w-[1050px] h-[450px] bg-white rounded-2xl overflow-hidden'>

                <div className='w-1/3 flex flex-col gap-y-16 overflow-hidden'>
                    <div className='p-2 -mt-12 -ml-30 -rotate-6'>
                        <StampCard />
                    </div>
                    <div className='p-2 -mt-12 -ml-20'>
                        <StampCard />
                    </div>
                    <div className='p-2 -mt-12 -ml-30'>
                        <StampCard />
                    </div>
                </div>
                <div className='w-1/3'>

                </div>
                <div className='w-1/3 flex flex-col overflow-hidden gap-y-4'>
                    <div className='ml-55 -mt-3'>
                        <StockCardSingle />
                    </div>
                    <div className='ml-48 mt-2'>
                        <StockCardSingle />
                    </div>
                    <div className='ml-55 mt-3'>

                        <StockCardSingle />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cta