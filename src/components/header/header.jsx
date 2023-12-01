'use client'


import React, { useState } from 'react';
import PrimaryBtn from '../primarybtn'
import Link from 'next/link'


const Header = () => {



  const [isHidden, setIsHidden] = useState(true);

  const toggleHiddenClass = () => {
    setIsHidden(!isHidden);
  };





  return (
    <div className='max-w-[1200px] mx-auto'>



      {/* mobile menu */}
      <div className='mx-auto max-w-[1200px]'>
      <div className={isHidden ? 'hidden' : ''}>
        <div className=' h[100vh] fixed top-0 right-0 left-0 bottom-0 z-10 bg-white'>
          <div className='flex align-middle justify-between p-5 px-6'>
            <div className=''>

              <PrimaryBtn text="Start a new project" />

            </div>

            <div className='' onClick={toggleHiddenClass}>
              <img src='/close.png' alt='menu close image' width='35' height='35' />
            </div>
          </div>

          <div className=' flex flex-col px-7 my-3 text-xl font-medium'>
            <Link href='/' className='py-3 ' onClick={toggleHiddenClass}>
              Home
            </Link>
            <Link href='/' className='py-3' onClick={toggleHiddenClass}>
              Work
            </Link>
            <Link href='/' className='py-3'onClick={toggleHiddenClass}>
              About Us
            </Link>
            <Link href='/' className='py-3'onClick={toggleHiddenClass}>
              Contact Us
            </Link>
            <Link href='/' className='py-3'onClick={toggleHiddenClass}>
              Service
            </Link>
            <Link href='/' className='py-3'onClick={toggleHiddenClass}>
              Blog
            </Link>
            <Link href='/' className='py-3'onClick={toggleHiddenClass}>
              Term & Conditions
            </Link>
          </div>

          <p className='px-7 py-3'>Follow us on</p>

          <div className='flex justify-between w-[250px] px-7'>
            <img src='/social60.png' alt='social icon' width='35' height='35' />
            <img src='/social61.png' alt='social icon' width='35' height='35' />
            <img src='/social62.png' alt='social icon' width='35' height='35' />
            <img src='/social63.png' alt='social icon' width='35' height='35' />
            <img src='/social64.png' alt='social icon' width='35' height='35' />
          </div>
        </div>
      </div>
      </div>






      {/* desktop menu */}
      <div className='flex justify-between p-5 mx-auto max-w-[1200px] '>
        <div className=''>
          <img
            src='/AceStudiosLogo.svg'
            alt='menu close image'
            width='165'
            height='90'
          />
          <h1>luqman</h1>
        </div>


        <div className='flex gap-4'>
          <div className='max-w-[150px] hidden md:block'>
            <PrimaryBtn text="Connect with us" />

          </div>

          <div onClick={toggleHiddenClass}>
            <div className=''>
              <img
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
  )
}

export default Header
