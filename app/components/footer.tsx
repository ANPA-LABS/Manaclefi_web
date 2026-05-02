import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-16'>
            <footer className='w-full py-8 px-10 flex items-center justify-between text-sm text-gray-500 mt-16'>

                <span>© 2025 Chappy. All rights reserved.</span>
                <div className='flex gap-6'>
                    <a href='#' className='hover:text-black transition-colors'>Privacy</a>
                    <a href='#' className='hover:text-black transition-colors'>Terms</a>
                    <a href='#' className='hover:text-black transition-colors'>Contact</a>
                </div>
            </footer>
            <div className='flex justify-center mt-2'>
                <Image
                    src={"/Bondb.svg"}
                    height={1000}
                    width={1000}
                    alt=''
                    />
            </div>
        </div>
    )
}

export default Footer