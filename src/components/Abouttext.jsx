"use client"
import React, { useState, useEffect } from 'react';

const AboutText = () => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleTextVisibility = () => {
        setShowFullText(!showFullText);
    };

    // useEffect(() => {
    //     setShowFullText(!showFullText);
    // }, [showFullText]);

    const firstHalfText = `Hey there! Welcome to my corner of the web! I'm Luqman Matloob, 
  a dedicated front-end developer with a passion for crafting immersive digital experiences. 
  With a blend of creativity and technical expertise, I transform ideas into stunning, user-friendly 
  interfaces that captivate and delight.
  .`;

    const secondHalfText = `Over the past two years, I've honed my skills in HTML, CSS, and JavaScript, building a strong foundation in web development. Specializing in frameworks like React and Next.js, I thrive on creating dynamic and interactive applications that push the boundaries of user engagement.
    .`;

    const third = `In addition to front-end technologies, I'm proficient in utilizing powerful tools like Tailwind CSS and Bootstrap to streamline development and ensure sleek, responsive designs. My backend expertise includes working with databases such as MongoDB and SQL Server, enabling robust data management and integration.
    `

    const fourth = `But it's not just about code for me – it's about creating connections. I believe in the power of effective communication and collaboration, working closely with clients to understand their vision and bring it to life. Whether it's building a sleek social media platform or refining existing processes with automation, I'm driven by a commitment to excellence and innovation.
    `

    const fifth = `When I'm not coding, you'll find me exploring the depths of history or pondering the mysteries of philosophy. I believe in the importance of lifelong learning and continuous growth, both personally and professionally.
`

    const sixth = `Ready to embark on a journey of digital transformation? Let's connect, collaborate, and code something incredible together. Welcome to the future of web development – let's make it unforgettable.

`

    return (
        <div className='mt-[100px] mb-[100px]'>
            <p className='max-w-[80%] text-start mx-auto mt-3 my-5 text-sm md:text-lg'>
                {showFullText ? (
                    <>

                        {firstHalfText}<br /><br />
                        {secondHalfText}<br /><br />
                        {third}<br /><br />
                        {fourth}<br /><br />
                        {fifth}<br /><br />
                        {sixth}
                        <br />



                        <button onClick={toggleTextVisibility} className="text-blue-500 font-bold hover:underline">Read less</button>
                    </>
                ) : (
                    <>

                        {firstHalfText}<br /><br />
                        {secondHalfText}<br /><br />

                        <button onClick={toggleTextVisibility} className="text-blue-500 font-bold hover:underline">Read more</button>
                    </>
                )}
            </p>
        </div>
    );
};

const Page = () => {
    return (
        <div>
            <AboutText />
        </div>
    );
};

export default AboutText;
