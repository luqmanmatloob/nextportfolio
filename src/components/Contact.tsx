import React from 'react'
import Socialicons from './Socialicons'
import { MdError } from 'react-icons/md'

const Contact = () => {
  return (
    <div>
      <section className=' '>
        <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-black '>
            Get in Touch
          </h2>

          <div className='mx-2 my-10'>
            <Socialicons />
          </div>

          <form action='#' className='space-y-8'>
            <div>
              <label
                htmlFor='subject'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Type your Name
              </label>
              <input
                type='text'
                id='subject'
                className='bg-[#ecf9ff] block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  '
                placeholder='Let us know how we can help you'
                required
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Type Your email
              </label>
              <input
                type='email'
                id='email'
                className='bg-[#ecf9ff] shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   '
                placeholder='name@gmail.com'
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Type your message
              </label>
              <textarea
                id='message'
                rows={6} 
                className='bg-[#ecf9ff] block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 '
                placeholder='Leave a comment...'
              ></textarea>
            </div>
            <div className='flex gap-2 items-center'>
              <button
                type='submit'
                className='bg-[#4287f5] text-white rounded-lg py-3 px-4 font-medium max-w-[200px] my-1 hover:bg-[#331ec9] transition duration-200 cursor-pointer'
              >
                Send message
              </button>
              <div className='  cursor-pointer'>
                <MdError className='text-red-500' />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
