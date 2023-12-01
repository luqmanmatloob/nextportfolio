import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PrimaryBtn from './primarybtn'


const PortfolioItem = ({ imgSrc, title, description, techStack, demoLink }) => (
  <section className='my-20'>
    <div className=' flex flex-col items-center gap-10 md:flex-row  my-10 border-[#e2e2e2] p-5 drop-shadow-xl shadow-xl border-2'>

      <div className='about__img w-[] flex-1'>
        <Image
          src={imgSrc}
          alt='about image'
          width={750}
          height={350}
          className='rounded-lg border-[1px]'
        />
      </div>


      <div className='flex-1 my-5 '>
        <h2 className='text-2xl font-semibold '>{title}</h2>
        <div className='border-2 border-[#4287f5] max-w-[150px] my-5'></div>
        <p className=''>{description}</p>
        <ul className='grid grid-cols-2 py-5 space-y-1 '>
          {techStack.map((tech, index) => (
            <li className='text-xs ' key={index}>
              {tech}
            </li>
          ))}
        </ul>
       
        <div className='max-w-[140px]'>
          <Link href={demoLink}>
            <PrimaryBtn text="Live Demo" />
            </Link>
        </div>

      </div>



    </div>
  </section>

)

function Portfolio() {
  return (
    <div className='max-w-[1050px] mx-auto py-20'>

      <div className='container mt-20  '>
        <div>
          <h2 className='font-semibold text-2xl'>My Projects.</h2>
        </div>
      </div>


      <div>
        <PortfolioItem
          imgSrc="/Portfolio/Portfolio9.jpeg"
          title='Figma to Tailwind, React, NextJs responsive Landing page'
          description='Converted a random figma design into responsive landing page using Tailwind, React and Nextjs '
          techStack={['Tailwindcss', 'React', 'NextJS']}
          demoLink='https://3-nextjs.vercel.app/'
        />
        <PortfolioItem
          imgSrc="/portfolio/portfolio8.jpeg"
          title='Food website using React NextJS'
          description='Made a responsive food website using Tailwind, React and Nextjs, Added pages using new Nextjs app router '
          techStack={['Tailwindcss', 'React', 'NextJS']}
          demoLink='https://food.luqmanmatloob.vercel.app/'
        />

        <PortfolioItem
          imgSrc="/Portfolio/portfolio7.jpg"
          title='Fitnesshub website using TailwindCSS'
          description='Made a website using TailwindCSS, added beautiful cards and tabs using JavaScript'
          techStack={['HTML', 'CSS', 'Tailwindcss', 'JavaScript']}
          demoLink='https://fitnesshub.luqmanmatloob.vercel.app/'
        />

        <PortfolioItem
          imgSrc="/portfolio/portfolio5.jpeg"
          title='CONVERTED THIS FIGMA DESIGN INTO CODE WITH PIXEL PERFECT ACCURACY.'
          description='I converted a Figma design into code with best practices, did SEO optimization, W3 validation, sitemap.xml, robot.txt  added Twitter card, graph card'
          techStack={['HTML', 'CSS', 'Bootstrap', 'JavaScript']}
          demoLink='https://luqmanmatloob.github.io/portfolio3/'
        />

        <PortfolioItem
          imgSrc="/portfolio/portfolio6.jpeg"
          title='Portfolio website using tialwindcss.'
          description='Again made a portfolio website for myself but this time using tailwindcss, Added light and dark theme, using local storage to save users theme preference '
          techStack={['HTML', 'CSS', 'Tailwindcss', 'JavaScript']}
          demoLink='https://luqmanm.vercel.app/'
        />



        {/* <PortfolioItem
          imgSrc='/portfolio/portfolio4.jpg'
          title='Portfolio website using Bootstrap.'
          description='Made same portfolio design using Bootstrap, tried to customize bootstrap to understand how to overwrite bootstrap while customizing it.'
          techStack={['HTML', 'CSS', 'Bootstrap']}
          demoLink='https://luqmanmatloob.github.io/portfolio2/'
        /> */}

        <PortfolioItem
          imgSrc="/portfolio/portfolio3.jpg"
          title=' Portfolio website using vanila HTML, CSS, JS.'
          description='Made a responsive and crossbrowser compatable portfolio website with and added some cool themes using Java Script and CSS variables,'
          techStack={['HTML', 'CSS', 'JavaScript']}
          demoLink='https://luqmanmatloob.github.io/'
        />

        <PortfolioItem
          imgSrc="/Portfolio/portfolio2.jpg"
          title='HTML CSS clone of Hero section.'
          description='Made a responsive clone of hero section of a random webiste form internet, and hosted it on netlify'
          techStack={['HTML', 'CSS']}
          demoLink='https://luqmanmatloob.netlify.app/'
        />

        <PortfolioItem
          imgSrc="/portfolio/portfolio1.jpg"
          title='Made a portfolio website using Html CSS.'
          description='Made a responsive portfolio website using Html CSS. Deployed it on github and learned the concepts of Git and Github'
          techStack={['HTML', 'CSS']}
          demoLink='https://luqmanmatloob.github.io/portfolio1/'
        />


      </div>


    </div>
  )
}
export default Portfolio
