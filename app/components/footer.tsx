import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-16'>
            <footer className='w-full py-8 px-10 flex flex-col gap-y-10 items-center justify-between text-sm text-gray-500 mt-16'>

                <span>© 2026 Manaclefi. All rights reserved.</span>
            </footer>
            <div className='flex justify-center mt-2'>
                <Image
                    src={"/Manacle.svg"}
                    height={1000}
                    width={1000}
                    alt=''
                    />
            </div>
        </div>
    )
}

export default Footer