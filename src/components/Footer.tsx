import React from 'react'
import Link from 'next/link'
import Socialicons from './Socialicons'
const Footer = () => {
  return (
    <div className='bg-[#0A142F] py-14'>
      <div className='flex justify-center text-white py-10 '>
        <Link href='/#home_section'>
          <div className='font-semibold text-2xl border-[#3b82f6]'>
            <span className='border-2   border-[#8e8e8e] md:border-0 md:border-b-4 md:border-[#3b82f6] p-1 md:p-2 '>
              Ｌ𝓾ⓠ𝓶卂Ⓝ
            </span>
            <span className='border-t-4 border-[#3b82f6] p-1 hidden md:inline '>
              𝓜ａⓉℓ𝕆𝕠๒
            </span>
          </div>
        </Link>
      </div>

      <Socialicons />

      <div className='text-[#bcbcbc] text-sm flex flex-wrap justify-between mx-auto max-w-[650px] align-middle py-10'>
        <p className='px-5'>Copyright reserved 2023</p>

        <p className='px-5'>
          Coded by Luqman Matloob, Design inspired by{' '}
          <a
            href='https://www.figma.com/file/wkP1sAJYnxUbdLEndpLogX/Bizpro'
            target='_blank'
            className='hover:border-b-white border-b-2 border-transparent'
          >
            bizpro
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
