import React from 'react'
import Image from 'next/image'
import PrimaryBtn from './primarybtn'


const Work = () => {
    return (
        <div className='mb-14'>



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
            </div>



            <div className='mt-10 mb-10 container flex flex-col items-center mx-auto '>

                <p className='text-center bold font-extrabold text-2xl'>
                    See Our Work
                </p>
                <p className='max-w-[80%] text-center mx-auto mt-10 my-5'>
                    Interdum ac tincidunt molestie facilisis. Nulla at erat odio bibendum diam quam. Scelerisque mus vel egestas justo, purus consequat nibh eget. Non risus feugiat porta integer.
                </p>


                <div className='flex flex-wrap gap-10 justify-center px-5'>
                    <Image
                        src="/work1.png"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    /> <Image
                        src="/work2.png"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    /> <Image
                        src="/work3.png"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                </div>


                <div className='bg-[#6854FC] text-white rounded-full py-2 px-5 font-medium max-w-[200px] my-7 hover:bg-[#331ec9] transition duration-200 cursor-pointer'>
                    See all out Products
                </div>

            </div>
        </div>
    )
}

export default Work
