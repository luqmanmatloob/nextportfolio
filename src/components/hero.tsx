import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as motion from "framer-motion/client"


import PrimaryBtn from './primarybtn'

const hero = () => {
  return (
    <div className='max-w-[1200px] mx-auto md:w-[90%] mt-20 '>
      <div className=' '>
        <Image
          src='/circle.png'
          alt=''
          width='20'
          height='20'
          className='absolute top-[25%] left-36'
        />
        <Image
          src='/circle.png'
          alt=''
          width='20'
          height='20'
          className='absolute top-[45%] left-[50%] w-4'
        />
        <Image
          src='/circle.png'
          alt=''
          width='20'
          height='20'
          className='absolute bottom-[20%] left-[15%] w-4'
        />
        <Image
          src='/circle.png'
          alt=''
          width='20'
          height='20'
          className='absolute bottom-[15%] left-[70%] w-3'
        />

        <Image
          src='/plus.png'
          alt=''
          width='20'
          height='20'
          className='absolute top-[25%] left-[60%] w-3'
        />
        <Image
          src='/plus.png'
          alt=''
          width='20'
          height='20'
          className='absolute z-50 right-[70%] bottom-[3%] w-3'
        />
        <Image
          src='/plus.png'
          alt=''
          width='20'
          height='20'
          className='absolute z-50 right-[40%] bottom-[20%] w-2'
        />
        <Image
          src='/plus.png'
          alt=''
          width='20'
          height='20'
          className='absolute z-50 right-[10%] bottom-[15%] w-3'
        />
      </div>

      <div className='p-10 flex justify-between flex-wrap-reverse'>
        <div className=' md:max-w-[50%] max-w-[100%]'>
          <div className='flex justify-center md:justify-start '>
            <div className=' inline-block'>
              <div className='flex bg-[#C4C4C4] p-2 gap-3 text-sm rounded-md mt-10 '>
                <Image
                  src='/sm_yellowCircle.png'
                  alt=''
                  width={20}
                  height={20}
                  className='h-[15px] md:h-[20px]'
                />

                <p className=''>Front-End Developer</p>
              </div>
            </div>
          </div>

          <p className='text-2xl md:text-5xl font-semibold mt-6 text-center md:text-start leading-6'>
            Hello _________ .
          </p>
          <p className='text-2xl md:text-5xl font-semibold mt-6 text-center md:text-start leading-6'>
            I am Luqman Matloob.
          </p>

          <p className='py-5 text-center md:text-start'>
            Hi, I am Luqman, a Front-end Developer and a student pursuing,
            degree in Information Technology. I have been into web development
            for about two years. I work to make the web a better place that is
            fast, easy to use, beautiful, and accessible to all :).{' '}
          </p>

          <div
            className='flex gap-3 justify-center items-center md:justify-start mb-10'>
            {/* id is for about scroll */}
            <motion.div
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 150 }} 
              >
                <Link href='/#contact_section' id='about_section'>
                  <PrimaryBtn text='Connect with me' />{' '}
                </Link>
              
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 150 }} 
              className='text-[#6854FC] hover:underline align-bottom mt-[8px] hidden md:block'>
              <Link href='/#portfolio_section'>Browse my work </Link>
            </motion.div>
          </div>
        </div>

        <div className=' md:max-w-[50%] mx-auto md:pr-0'>
          <motion.img
            whileHover={{
              y: -10, // Move up by 10px when hovered
              transition: { type: "spring", stiffness: 300 }, // Add a springy animation
            }}

            src='/img/download35.png'
            alt=''
            width=''
            height=''
            className=' w-[60%] md:w-[75%] mx-auto mt-5 rounded-2xl md:pr-0 bg-[#3b82f6] md:bg-transparent'
          />
        </div>
      </div>
    </div>
  )
}

export default hero
