import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PrimaryBtn from './primarybtn'

const Contact = () => {
  return (
    <div>
    <section className=" ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black dark:text-white">Get in Touch</h2>



        <div className='mx-5 my-10'>
                <div className='flex flex-wrap justify-center  px-7 mx-auto gap-10'>
                    <Link href="#"><Image src='/social60.png' alt='social icon' width='35' height='35' className='hover:bg-[#ceebf9] transition duration-200 rounded-full cursor-pointer' /></Link>
                    <Link href="#"><Image src='/social61.png' alt='social icon' width='35' height='35' className='hover:bg-[#ceebf9] transition duration-200 rounded-full cursor-pointer' /></Link>
                    <Link href="#"><Image src='/social62.png' alt='social icon' width='35' height='35' className='hover:bg-[#ceebf9] transition duration-200 rounded-full cursor-pointer' /></Link>
                    <Link href="#"><Image src='/social64.png' alt='social icon' width='35' height='35' className='hover:bg-[#ceebf9] transition duration-200 rounded-full cursor-pointer' /></Link>
                </div>
            </div>


        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Type your Name</label>
            <input type="text" id="subject" className="bg-[#ecf9ff] block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 :placeholdarkder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Type Your email</label>
            <input type="email" id="email" className="bg-[#ecf9ff] shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Type your message</label>
            <textarea id="message" rows="6" className="bg-[#ecf9ff] block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="bg-[#4287f5] text-white rounded-lg py-3 px-4 font-medium max-w-[200px] my-1 hover:bg-[#331ec9] transition duration-200 cursor-pointer">Send message</button>

        </form>
      </div>
    </section>

    </div>
  )
}

export default Contact
