import Hero from '../components/hero'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import About from '../components/About'

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
