import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className=''>
      <div className='mt-10 mb-10 container flex flex-col items-center mx-auto '>
        <p className='text-center bold font-extrabold text-3xl md:text-4xl mt-5 mb-5    '>
          About Me .
        </p>

        <p className='max-w-[80%] text-start mx-auto mt-3 my-5'>
          Hey there! I am Luqman Matloob, I am a Front-End Developer, currently
          pursuing a BS in Information Technology. With a passion for crafting
          exceptional user experiences, I have been immersed in the world of web
          development for the past two years.
          <br />
          <br />
          As a Front-end Developer, I wield a diverse skill set, including
          expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind, React,
          Next.js, Git, GitHub, Figma, XD, and Photoshop. Beyond the web, I have
          a strong grip on C++. Additionally, I have the knack for automating
          tasks, from streamlining Excel processes to enhancing Google Sheets
          functionality, using VBA and Google Apps Script.
          <br />
          <br />
          My journey in technology is fueled by a commitment to creating not
          just functional, but aesthetically pleasing and accessible web
          solutions. Lets code something incredible together
          <br />
        </p>

        <p className='text-center bold font-extrabold text-2xl mt-5 '>
          My Skills
        </p>

        <div className='flex flex-wrap gap-8 my-5 justify-center items-center mx-3 max-w-3xl'>
          <div className=''>
            <Image
              src='/img/html.png'
              alt=''
              width='70'
              height='70'
              className='w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-auto'
            />
            <p className='text-center text-sm mt-1'>HTML</p>
          </div>

          <div className=''>
            <Image
              src='/img/css.png'
              alt=''
              width='70'
              height='70'
              className='w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-auto'
            />
            <p className='text-center text-sm mt-1'>CSS</p>
          </div>
          <div>
            <Image
              src='/img/java_script.png'
              alt=''
              width='70'
              height='70'
              className='w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-auto'
            />
            <p className='text-center text-sm mt-1'>JavaScript</p>
          </div>

          <div>
            <Image
              src='/img/bootstrap.png'
              alt=''
              width='70'
              height='70'
              className='w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-auto'
            />
            <p className='text-center text-sm mt-1'>Bootstrap</p>
          </div>

          <div className=''>
            <Image
              src='/img/tailwind.png'
              alt=''
              width='70'
              height='70'
              className='rounded-lg w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-auto border-black border'
            />
            <p className='text-center text-sm mt-1'>Tailwind</p>
          </div>

          <div>
            <Image
              src='/img/react.png'
              alt=''
              width='70'
              height='70'
              className='w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-auto'
            />
            <p className='text-center text-sm mt-1'>React JS</p>
          </div>

          <div>
            <Image
              src='/img/nextjs2.png'
              alt=''
              width='70'
              height='70'
              className='w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-auto'
            />
            <p className='text-center text-sm mt-1'>Next JS</p>
          </div>

          <div>
            <Image
              src='/img/git.png'
              alt=''
              width='70'
              height='70'
              className='w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-auto'
            />
            <p className='text-center text-sm mt-1'>Git</p>
          </div>
          <div>
            <Image
              src='/img/github.png'
              alt=''
              width='70'
              height='70'
              className='w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-auto'
            />
            <p className='text-center text-sm mt-1'>Github</p>
          </div>

          <div>
            <Image
              src='/img/figma.png'
              alt=''
              width='70'
              height='70'
              className='w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-auto'
            />
            <p className='text-center text-sm mt-1'>Figma</p>
          </div>

          <div>
            <Image
              src='/img/xd.png'
              alt=''
              width='70'
              height='70'
              className='w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-auto'
            />
            <p className='text-center text-sm mt-1'>XD</p>
          </div>
          <div>
            <Image
              src='/img/canva.png'
              alt=''
              width='70'
              height='70'
              className='w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-auto'
            />
            <p className='text-center text-sm mt-1'>Canva</p>
          </div>
        </div>
      </div>
      <div id='portfolio_section'></div>
    </div>
  )
}

export default About
