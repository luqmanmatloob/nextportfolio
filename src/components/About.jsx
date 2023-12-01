import React from 'react'
import Image from 'next/image'
const About = () => {
    return (

        <div className='' >
            <div className='mt-10 mb-10 container flex flex-col items-center mx-auto '>






                <p className='text-center bold font-extrabold text-3xl md:text-4xl mt-5'>
                    About Me .
                </p>


                <p className='max-w-[80%] text-start mx-auto mt-3 my-5'>
                    Hi there, I am Luqman, I am a Front-End Developer, I create Elegant,
                    Modern, user-friendly websites. If you are looking for a Front-End Developer
                    who believes in perseverance and can deliver high-quality products, then, look
                    no further. I am confident that my skills and experience can be of valuable assistance.
                    Furthermoe I have 4 months of experience automating Excel spreadsheets and Google
                    Sheets with VBA and Apps Script. I am currently a student of BS Information Technology.
                    I am eager to learn new technologies and apply my skills to real-world projects.

                </p>




                <p className='text-center bold font-extrabold text-2xl mt-5'>
                    My Skills
                </p>


                <div className='flex flex-wrap gap-8 my-5 justify-center '>
                    <Image
                        src='/img/html.png'
                        alt=''
                        width='70'
                        height='70'
                        className=''
                    />
                    <Image
                        src='/img/css.png'
                        alt=''
                        width='70'
                        height='70'
                        className=''
                    />
                    <Image
                        src='/img/java_script.png'
                        alt=''
                        width='70'
                        height='70'
                        className=''
                    />
                    <Image
                        src='/img/bootstrap.png'
                        alt=''
                        width='70'
                        height='70'
                        className=''
                    />
                    <Image
                        src='/img/tailwind.png'
                        alt=''
                        width='70'
                        height='70'
                        className='rounded-lg'
                    />
                    <Image
                        src='/img/react.png'
                        alt=''
                        width='70'
                        height='70'
                        className=''
                    />
                    <Image
                        src='/img/nextjs2.png'
                        alt=''
                        width='70'
                        height='70'
                        className=''
                    />




                </div>





                <div className='flex flex-wrap gap-8 my-5 justify-center'>
                    <Image
                        src='/img/git.png'
                        alt=''
                        width='70'
                        height='70'
                        className=''
                    />
                    <Image
                        src='/img/github.png'
                        alt=''
                        width='70'
                        height='70'
                        className=''
                    />
                    <Image
                        src='/img/figma.png'
                        alt=''
                        width='70'
                        height='70'
                        className=''
                    />
                    <Image
                        src='/img/xd.png'
                        alt=''
                        width='70'
                        height='70'
                        className=''
                    />

                    <Image
                        src='/img/canva.png'
                        alt=''
                        width='70'
                        height='70'
                        className=''
                    />

                </div>





            </div>
        </div>
    )
}

export default About
