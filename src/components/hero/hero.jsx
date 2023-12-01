import React from 'react'
import Image from 'next/image'

import PrimaryBtn from '../primarybtn'


const hero = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>

            <div className=' '>
                <Image
                    src='/circle.png'
                    alt=''
                    width='20'
                    height='20'
                    className='absolute top-28 left-36'
                /> 
                <Image
                    src='/circle.png'
                    alt=''
                    width='20'
                    height='20'
                    className='absolute top-[45%] left-[50%] w-4'
                />
                <Image
                    src='/circle.png'
                    alt=''
                    width='20'
                    height='20'
                    className='absolute bottom-[5%] left-[15%] w-4'
                />
                <Image
                    src='/circle.png'
                    alt=''
                    width='20'
                    height='20'
                    className='absolute bottom-[5%] left-[70%] w-3'
                />

                <Image
                    src='/plus.png'
                    alt=''
                    width='20'
                    height='20'
                    className='absolute top-[15%] left-[60%] w-3'

                />
                <Image
                    src='/plus.png'
                    alt=''
                    width='20'
                    height='20'
                    className='absolute z-50 right-[70%] bottom-[3%] w-3'

                />
                <Image
                    src='/plus.png'
                    alt=''
                    width='20'
                    height='20'
                    className='absolute z-50 right-[40%] bottom-[20%] w-2'

                />
                <Image
                    src='/plus.png'
                    alt=''
                    width='20'
                    height='20'
                    className='absolute z-50 right-[10%] bottom-[15%] w-3'

                />
            </div>

            <div className='p-10 flex justify-between flex-wrap'>


                <div className=' md:max-w-[50%] max-w-[100%]'>

                    <div className='flex justify-center md:justify-start '>
                    <div className=' inline-block'>
                        <div className='flex bg-[#C4C4C4] p-2 gap-3 text-sm rounded-md mt-10 '>
                            <img
                                src='/sm_yellowCircle.png'
                                alt=''
                                width=''
                                height=''
                                className='h-[15px] md:h-[20px] '
                            />
                            <p className=''>#1 Digital company in the town!</p>
                        </div>
                        </div>
                    </div>

                    <p className='text-2xl md:text-5xl font-semibold mt-6 text-center md:text-start'>Amet Sed <br /> Cursus EU <br /> Tellus Eget.</p>

                    <p className='py-5 text-center md:text-start'>Vitae augue elementum ullamcorper porta adipiscing dui,
                        consequat enim quam. Nisi rhoncus vitae orci duis diam eget faucibus.
                        Nulla enim sit nibh sed.
                    </p>


                    <div className='flex gap-3  justify-center md:justify-start mb-10'>

                        <PrimaryBtn text="Connect with us" />

                        <div className='text-[#6854FC] align-bottom mt-[8px] hidden md:block'>
                            Browse our works
                        </div>
                    </div>


                </div>


                <div className=' md:max-w-[50%] '>
                    <img
                        src='/Component1.png'
                        alt=''
                        width=''
                        height=''
                        className='w-[70%] mx-auto mt-5 '

                    />

                </div>

            </div>


        
        </div>
    )
}

export default hero
