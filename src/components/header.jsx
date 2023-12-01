'use client'


import React, { useState } from 'react';
import PrimaryBtn from './primarybtn'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {



  const [isHidden, setIsHidden] = useState(true);

  const toggleHiddenClass = () => {
    setIsHidden(!isHidden);
  };





  return (
    <div className='max-w-[1200px] mx-auto mt-10  '>



      {/* mobile menu */}
      <div className='mx-auto max-w-[1200px]'>
        <div className={isHidden ? 'hidden' : ''}>
          <div className=' h[100vh] fixed top-0 right-0 left-0 bottom-0 z-40 bg-white'>
            <div className='flex align-middle justify-between p-5 px-6'>
              <div className=''>

                <PrimaryBtn text="Connect with me" />

              </div>

              <div className='' onClick={toggleHiddenClass}>
                <Image src='/close.png' alt='menu close image' width='35' height='35' />
              </div>
            </div>

            <div className=' flex flex-col px-7 my-3 text-xl font-medium'>
              <Link href='/' className='py-3 ' onClick={toggleHiddenClass}>
                Home
              </Link>
              <Link href='/' className='py-3' onClick={toggleHiddenClass}>
                About
              </Link>
              <Link href='/' className='py-3' onClick={toggleHiddenClass}>
                Portfolio
              </Link>
              <Link href='/' className='py-3' onClick={toggleHiddenClass}>
                Contact
              </Link>
              <Link href='/' className='py-3' >
                Blog <span className='text-red-600'>(Coming soon...)</span>
              </Link>
              <Link href='/' className='py-3' >
                Store <span className='text-red-600'>(Coming soon...)</span>
              </Link>
            </div>

            <p className='px-7 py-3'>Follow me on Socials</p>

            <div className='flex justify-between w-[250px] px-7'>
              <Image src='/social60.png' alt='social icon' width='35' height='35' />
              <Image src='/social61.png' alt='social icon' width='35' height='35' />
              <Image src='/social62.png' alt='social icon' width='35' height='35' />
              <Image src='/social64.png' alt='social icon' width='35' height='35' />
            </div>
          </div>
        </div>
      </div>






      {/* desktop menu not fixed */}
      {/* <div className='flex justify-between items-center p-3 mx-auto max-w-[1200px] w-[90%] bg-white rounded-xl cursor-pointer drop-shadow-md shadow-md'>
        <div className='font-semibold text-2xl border-[#3b82f6]'>
          <span className='border-2   border-[#000000] md:border-0 md:border-b-4 md:border-[#3b82f6] p-1 md:p-2 '>Ｌ𝓾ⓠ𝓶卂Ⓝ</span>
          <span className='border-t-4 border-[#3b82f6] p-1 hidden md:inline '>𝓜ａⓉℓ𝕆𝕠๒</span>
        </div>


        <div className='flex gap-4 items-center'>
          <div className=''>
            <div className=' gap-5 hidden md:flex items-center'>
              <Link href="#">Home </Link>

              <Link href="#">Portfolio</Link>

              <Link href="#"><PrimaryBtn text="Contact" /></Link>
            </div>

            <div onClick={toggleHiddenClass} className='md:hidden'>
              <div className=''>
                <Image
                  src='/open.svg'
                  alt='menu close image'
                  width='35'
                  height='35'
                />
              </div>
            </div>

          </div>
        </div>
      </div> */}


      <div className='z-30 fixed top-5 left-0 right-0 flex justify-between items-center p-3 mx-auto max-w-[1200px] w-[90%] bg-white rounded-xl cursor-pointer drop-shadow-md shadow-md'>
        <Link href="/">
          <div className='font-semibold text-2xl border-[#3b82f6]'>
            <span className='border-2 border-[#000000] md:border-0 font-extrabold md:border-b-4 md:border-[#3b82f6] p-1 md:p-2 '><span className='text-[#3b82f6] md:text-black text-3xl'>Ｌ</span>𝓾ⓠ𝓶卂Ⓝ</span>
            <span className='border-t-4 border-[#3b82f6] p-1 hidden md:inline '>𝓜ａⓉℓ𝕆𝕠๒</span>
          </div>
        </Link>

        <div className='flex gap-4 items-center'>
          <div className=''>
            <div className='gap-5 hidden md:flex items-center'>
              <Link href="/">Home </Link>
              <Link href="#">Portfolio</Link>
              <Link href="#"><PrimaryBtn text="Contact" /></Link>
            </div>

            <div onClick={toggleHiddenClass} className='md:hidden'>
              <div className='border-black border-2 rounded-sm p-[1px]'>
                <Image
                  src='/open.svg'
                  alt='menu close image'
                  width='35'
                  height='35'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header
