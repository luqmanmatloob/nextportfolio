import Hero from 'src/components/hero'
import Portfolio from 'src/components/Portfolio'
import Contact from 'src/components/Contact'
import About from 'src/components/About'

import { Metadata } from "next";

export const generateMetadata = () => {
  return {
    title: 'Luqman Matloob | Front-End Developer',
    description: 'I am Luqman, a Front-end Developer and a student pursuing, degree in Information Technology, I wield a diverse skill set, including expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind, React, Next.js, Git, GitHub, Figma, XD, and Photoshop',
  };
};

export default function Home() {
  return (
    <main className=" ">
      {/* comit failure test */}
      <Hero />
      <About />
      <Portfolio />
      <Contact />


    </main>
  )
}
