import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='bg-[#0A142F] py-14'>
            <div className='flex justify-center text-white py-10 '>
                <Link href="/">

                    <div className='font-semibold text-2xl border-[#3b82f6]'>
                        <span className='border-2   border-[#8e8e8e] md:border-0 md:border-b-4 md:border-[#3b82f6] p-1 md:p-2 '>Ｌ𝓾ⓠ𝓶卂Ⓝ</span>
                        <span className='border-t-4 border-[#3b82f6] p-1 hidden md:inline '>𝓜ａⓉℓ𝕆𝕠๒</span>
                    </div>
                </Link>

            </div>

            <div className='mx-5 '>
                <div className='flex flex-wrap justify-center  px-7 mx-auto gap-10'>
                    <Link href="#"><Image src='/social60.png' alt='social icon' width='35' height='35' className='hover:bg-[#331ec9] transition duration-200 rounded-full cursor-pointer' /></Link>
                    <Link href="#"><Image src='/social61.png' alt='social icon' width='35' height='35' className='hover:bg-[#331ec9] transition duration-200 rounded-full cursor-pointer' /></Link>
                    <Link href="#"><Image src='/social62.png' alt='social icon' width='35' height='35' className='hover:bg-[#331ec9] transition duration-200 rounded-full cursor-pointer' /></Link>
                    <Link href="#"><Image src='/social64.png' alt='social icon' width='35' height='35' className='hover:bg-[#331ec9] transition duration-200 rounded-full cursor-pointer' /></Link>
                </div>
            </div>


            <div className='text-[#bcbcbc] text-sm flex flex-wrap justify-center align-middle py-10'>
                <p className='px-5'>
                    Copyright 2021
                </p>

                <p className='px-5'>
                    Terms & Conditions

                </p>
            </div>
        </div>

    )
}

export default Footer
