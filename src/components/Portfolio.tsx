import React from 'react'
import Image from 'next/image'
import PrimaryBtn from './primarybtn'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <section className=''>
      <div className='mb-14'>
        <div className='mt-32 mb-10 container flex flex-col items-center mx-auto '>
          <p className='text-center bold font-extrabold text-4xl'>Portfolio</p>
          <p className='max-w-[80%] text-center mx-auto mt-10 my-10'></p>

          <div className='flex flex-wrap gap-10 justify-center px-5 max-w-7xl'>
            <div className='rounded-md border-2 border-[#cacaca] p-5 drop-shadow-xl shadow-xl '>
              <Image
                src='/Portfolio/portfolio11.png'
                width='400'
                height='250'
                alt=''
                className='w-[%] h-[%]'
              />
              <div className='my-5'>
                <Link href='https://todoapp-luqman.vercel.app/' target='_blank'>
                  <PrimaryBtn text='Live Demo' />
                </Link>
              </div>
            </div>

            <div className='rounded-md border-2 border-[#cacaca] p-5 drop-shadow-xl shadow-xl '>
              <Image
                src='/Portfolio/portfolio12.png'
                width='400'
                height='250'
                alt=''
                className='w-[%] h-[%]'
              />
              <div className='my-5'>
                <Link
                  href='https://travelsite-luqman.vercel.app/'
                  target='_blank'
                >
                  <PrimaryBtn text='Live Demo' />
                </Link>
              </div>
            </div>

            <div className='rounded-md border-2 border-[#cacaca] p-5 drop-shadow-xl shadow-xl '>
              <Image
                src='/Portfolio/portfolio7.jpg'
                width='400'
                height='250'
                alt=''
                className='w-[%] h-[%]'
              />
              <div className='my-5'>
                <Link
                  href='https://fitnesshub.luqmanmatloob.vercel.app/ '
                  target='_blank'
                >
                  <PrimaryBtn text='Live Demo' />
                </Link>
              </div>
            </div>

            <div className='rounded-md border-2 border-[#cacaca] p-5 drop-shadow-xl shadow-xl '>
              <Image
                src='/Portfolio/portfolio9.jpeg'
                width='400'
                height='250'
                alt=''
                className='w-[%] h-[%]'
              />
              <div className='my-5'>
                <Link href='https://3-nextjs.vercel.app/' target='_blank'>
                  <PrimaryBtn text='Live Demo' />
                </Link>
              </div>
            </div>
          </div>

          <div className='mb-10 mt-16' id='contact_section'>
            <Link href='/portfolio'>
              <PrimaryBtn text='View More' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
