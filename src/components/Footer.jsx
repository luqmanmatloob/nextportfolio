import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#0A142F] py-14'>
            <p className='text-center bold font-extrabold text-lg text-white py-10 s'>
                <span className='text-yellow-500'>Ace</span> Studio
            </p>

            <div className='mx-5'>
                <div className='flex flex-wrap justify-center  px-7 mx-auto gap-10'>
                    <img src='/social60.png' alt='social icon' width='35' height='35' className='hover:bg-[#331ec9] transition duration-200 rounded-full cursor-pointer' />
                    <img src='/social61.png' alt='social icon' width='35' height='35' className='hover:bg-[#331ec9] transition duration-200 rounded-full cursor-pointer' />
                    <img src='/social62.png' alt='social icon' width='35' height='35' className='hover:bg-[#331ec9] transition duration-200 rounded-full cursor-pointer' />
                    <img src='/social63.png' alt='social icon' width='35' height='35' className='hover:bg-[#331ec9] transition duration-200 rounded-full cursor-pointer'/>
                    <img src='/social64.png' alt='social icon' width='35' height='35' className='hover:bg-[#331ec9] transition duration-200 rounded-full cursor-pointer' />
                </div>
            </div>


            <div className='text-[#bcbcbc] text-sm flex flex-wrap justify-center align-middle py-10'>
                <p className='px-5'>
                    Copyright 2021
                </p>

                <p className='px-5'>
                    Terms & Conditions

                </p>
            </div>
        </div>

    )
}

export default Footer
