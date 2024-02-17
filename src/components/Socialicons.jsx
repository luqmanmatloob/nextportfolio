import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";





const Socialicons = () => {
  return (
    <div>
      <div className='mx-5 '>
        <div className='flex flex-wrap justify-center px-5 mx-auto gap-5'>
          
          

          <Link href="https://www.linkedin.com/in/luqmanmatloob" target="_blank">
            <div className='hover:scale-150 hover:transition-transform duration-300  rounded-full cursor-pointer text-[#3b82f6]'>
            <FaLinkedin className="text-3xl" />
            </div>
          </Link>

          <Link href="https://twitter.com/luqmanmatloob" target="_blank">
            <div className='hover:scale-150 hover:transition-transform duration-300  rounded-full cursor-pointer text-[#3b82f6]'>
            <BsTwitterX className="text-3xl" />
            </div>
          </Link>


          <Link href="https://github.com/luqmanmatloob" target="_blank" >
            <div className='hover:scale-150 hover:transition-transform duration-300  rounded-full cursor-pointer text-[#3b82f6]'>
              <FaGithub className="text-3xl" />
            </div>
          </Link>


        </div>
      </div>
    </div>
  )
}

export default Socialicons
