import Image from 'next/image'
import Hero from 'src/components/hero/hero'
import Services from 'src/components/Services'
import Work from 'src/components/Work'

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
      <div className='bg-[#AEE2FF] h-8'></div>

      <Services/>
      <Work/>

    </main>
  )
}
