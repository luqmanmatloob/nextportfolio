import React from 'react'
import Image from 'next/image'
import PrimaryBtn from './primarybtn'
import Link from 'next/link'


const Portfolio = () => {
    return (
        <section  className=''>
        <div className='mb-14' >


            {/* 
            <div className='bg-[#EAEAEA] py-16 px-10 '>
                <div className='container md:flex items-center mx-auto max-w-[1200px]  '>
                    <p className='font-extrabold text-2xl md:border-r-4 border-[#b4b4b4] md:mr-6 md:pr-6 mb-10 md:mb-0 '>
                        We’re a lean creative agency that uses design and code to solve problems.
                    </p>
                    <p className=''>
                        Semper bibendum nisl, fermentum mi convallis. Sed vitae tincidunt nunc, aliquam orci. Porttitor faucibus morbi sed senectus justo, adipiscing augue. Est, in in pretium at libero morbi. Euismod viverra arcu nisi eu sit.
                        <br />Praesent diam non imperdiet imperdiet potenti tristique et. Amet nec.
                    </p>
                </div>
            </div> */}



            <div className='mt-32 mb-10 container flex flex-col items-center mx-auto '>

                <p className='text-center bold font-extrabold text-4xl'>
                    Portfolio
                </p>
                <p className='max-w-[80%] text-center mx-auto mt-10 my-10'>
                </p>


                <div className='flex flex-wrap gap-10 justify-center px-5'>
                    <div className='rounded-md border-2 border-[#cacaca] p-5 drop-shadow-xl shadow-xl '>
                        <Image
                            src="/Portfolio/portfolio7.jpg"
                            width='400'
                            height='250'
                            alt=""
                            className='w-[%] h-[%]'
                        />
                        <div className='my-5'>
                            <Link href="https://fitnesshub.luqmanmatloob.vercel.app/ "target='_blank'><PrimaryBtn text="Live Demo" /></Link>
                        </div>
                    </div>


                    <div className='rounded-md border-2 border-[#cacaca] p-5 drop-shadow-xl shadow-xl '>
                        <Image
                            src="/Portfolio/portfolio8.jpeg"
                            width='400'
                            height='250'
                            alt=""
                            className='w-[%] h-[%]'
                        />
                        <div className='my-5'>
                            <Link href="https://food.luqmanmatloob.vercel.app/ " target='_blank'><PrimaryBtn text="Live Demo" /></Link>
                        </div>
                    </div>


                    <div className='rounded-md border-2 border-[#cacaca] p-5 drop-shadow-xl shadow-xl '>
                        <Image
                            src="/Portfolio/portfolio9.jpeg"
                            width='400'
                            height='250'
                            alt=""
                            className='w-[%] h-[%]'
                        />
                        <div className='my-5'>
                            <Link href="https://3-nextjs.vercel.app/" target='_blank' ><PrimaryBtn text="Live Demo" /></Link>
                        </div>
                    </div>


                    <div className='rounded-md border-2 border-[#cacaca] p-5 drop-shadow-xl shadow-xl '>
                        <Image
                            src="/Portfolio/portfolio3.jpg"
                            width='400'
                            height='250'
                            alt=""
                            className='w-[%] h-[%]'
                        />
                        <div className='my-5'>
                            <Link href="https://luqmanmatloob.github.io/"  target='_blank'><PrimaryBtn text="Live Demo" /></Link>
                        </div>
                    </div>






                </div>


                <div className='mb-10 mt-16' id='contact_section'>
                    <Link href="/portfolio">
                        <PrimaryBtn text='View More' />
                    </Link>
                </div>

            </div>
        </div>
        </section>
    )
}

export default Portfolio
