import Image from 'next/image'
import Hero from 'src/components/hero/hero'
import Services from 'src/components/Services'
import Work from 'src/components/Work'
import Contact from 'src/components/Contact'
import Skills from 'src/components/Skills'

import { Metadata } from "next";


export const generateMetadata = () => {
  return {
    title: "Amet SedCursus EU Tellus Eget.",
    description: "Vitae augue elementum ullamcorper porta adipiscing dui, consequat enim quam. Nisi rhoncus vitae orci duis diam eget faucibus. Nulla enim sit nibh sed.",
  };
};

export default function Home() {
  return (
    <main className="">

      <Hero />

      {/* <Services/> */}
      {/* <Work/> */}
      <Skills/>
      <Contact/>

    </main>
  )
}
