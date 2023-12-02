import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Socialicons = () => {
  return (
    <div>
      <div className='mx-5 '>
                <div className='flex flex-wrap justify-center  px-5 mx-auto gap-5'>
                    <Link href="#"><Image src='/social60.png' alt='social icon' width='35' height='35' className='hover:bg-[#331ec9] transition duration-200 rounded-full cursor-pointer' /></Link>
                    <Link href="#"><Image src='/social61.png' alt='social icon' width='35' height='35' className='hover:bg-[#331ec9] transition duration-200 rounded-full cursor-pointer' /></Link>
                    <Link href="#"><Image src='/social62.png' alt='social icon' width='35' height='35' className='hover:bg-[#331ec9] transition duration-200 rounded-full cursor-pointer' /></Link>
                    <Link href="#"><Image src='/social64.png' alt='social icon' width='35' height='35' className='hover:bg-[#331ec9] transition duration-200 rounded-full cursor-pointer' /></Link>
                </div>
            </div>
    </div>
  )
}

export default Socialicons
