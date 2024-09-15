import React from 'react'
import Link from 'next/link'
import PrimaryBtn from './primarybtn'
import AboutText from './AboutText'
import { SiHtml5 } from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { BiLogoTypescript } from 'react-icons/bi'
import { PiFileSqlFill } from 'react-icons/pi'
import { FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandNodejs } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { SiMicrosoftsqlserver } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaFigma } from 'react-icons/fa'
import { SiAdobexd } from 'react-icons/si'
import { SiCanva } from 'react-icons/si'
import * as motion from "framer-motion/client"

const About = () => {
  const iconArray = [
    {
      icon: <SiHtml5 className='text-red-500 text-3xl md:text-6xl' />,
      label: 'HTML'
    },
    {
      icon: <FaCss3Alt className='text-blue-500 text-3xl md:text-6xl' />,
      label: 'CSS'
    },
    {
      icon: (
        <IoLogoJavascript className='text-yellow-500 text-3xl md:text-6xl' />
      ),
      label: 'JavaScript'
    },
    {
      icon: <BiLogoTypescript className='text-blue-600 text-3xl md:text-6xl' />,
      label: 'TypeScript'
    },
    {
      icon: <PiFileSqlFill className='text-green-500 text-3xl md:text-6xl' />,
      label: 'SQL'
    },
    {
      icon: <FaBootstrap className='text-purple-500 text-3xl md:text-6xl' />,
      label: 'Bootstrap'
    },
    {
      icon: <SiTailwindcss className='text-teal-500 text-3xl md:text-6xl' />,
      label: 'TailwindCSS'
    },
    {
      icon: <TbBrandNodejs className='text-green-600 text-3xl md:text-6xl' />,
      label: 'NodeJS'
    },
    {
      icon: <FaReact className='text-blue-400 text-3xl md:text-6xl' />,
      label: 'React'
    },
    {
      icon: <SiNextdotjs className='text-black text-3xl md:text-6xl' />,
      label: 'NextJSD'
    },
    {
      icon: (
        <SiMicrosoftsqlserver className='text-blue-800 text-3xl md:text-6xl' />
      ),
      label: 'Sql Server'
    },
    {
      icon: <SiMongodb className='text-green-600 text-3xl md:text-6xl' />,
      label: 'Mongodb'
    },
    {
      icon: <FaGitAlt className='text-red-700 text-3xl md:text-6xl' />,
      label: 'Git'
    },
    {
      icon: <FaGithub className='text-black text-3xl md:text-6xl' />,
      label: 'Github'
    },
    {
      icon: <FaFigma className='text-purple-600 text-3xl md:text-6xl' />,
      label: 'Figma'
    },
    {
      icon: <SiAdobexd className='text-red-800 text-3xl md:text-6xl' />,
      label: 'XD'
    },
    {
      icon: <SiCanva className='text-blue-700 text-3xl md:text-6xl' />,
      label: 'Canva'
    }
  ]

  return (
    <div className=''>
      <div className='mt-10 mb-10 container flex flex-col items-center mx-auto '>
        <p className='text-center bold font-extrabold text-3xl md:text-4xl mt-5 mb-5    '>
          About Me .
        </p>

        <div className='max-w-[80%] text-start mx-auto mt-3 my-5 text-sm md:text-lg'>
          <AboutText />
        </div>
        <p className='text-center bold font-extrabold text-2xl mt-5 '>
          My Skills
        </p>

        <div className='flex flex-wrap gap-8 my-5 justify-center items-center mx-3 max-w-3xl'>
          {iconArray.map((item, index) => (
             <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "",
            }}
            transition={{ type: "spring", stiffness: 200 }}
               key={index} className='text-center'>
              <div className='flex justify-center items-center'>
                {item.icon}
              </div>
              <p className='text-center text-sm mt-1'>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className='  border-[#e2e2e2]   max-w-[700px]  mx-auto '>
        <div className='drop-shadow-xl shadow-xl border-2 p-5 m-5'>
          <p className='flex items-center justify-center'>
            <img
              // align='center'
              src='https://github-readme-streak-stats.herokuapp.com/?user=luqmanmatloob&'
              alt='luqmanmatloob'
            />
          </p>
          <div className='text-[#6854FC] flex justify-center first-letter:text-md  mt-5  '>
            <Link href='https://github.com/luqmanmatloob/' target='_blank'>
              <PrimaryBtn text='My github -->' />
            </Link>
          </div>
        </div>
      </div>

      <div id='portfolio_section'></div>
    </div>
  )
}

export default About
