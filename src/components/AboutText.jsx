// 'use client'
// import React, { useState } from 'react'

// const AboutText = () => {
//   const [showFullText, setShowFullText] = useState(false)

//   const toggleTextVisibility = () => {
//     setShowFullText(!showFullText)
//   }


//   const firstHalfText = `
//   Welcome to my corner of the web! I'm Luqman Matloob, a dedicated software developer with a passion for crafting immersive digital experiences. With a blend of creativity and technical expertise, I transform ideas into stunning, user-friendly interfaces that captivate and delight.
//   Over the past two years, I've honed my skills in HTML, CSS, and JavaScript, building a strong foundation in web development. Specializing in frameworks like React and Next.js, I thrive on creating dynamic and interactive applications that push the boundaries of user engagement.
  
//     `

//   const secondHalfText = `
//   Over the past two years, I've honed my skills in HTML, CSS, and JavaScript, building a strong foundation in web development. Specializing in frameworks like React and Next.js, I thrive on creating dynamic and interactive applications that push the boundaries of user engagement.
//   `
//   const third = `
//   In addition to front-end technologies, I'm proficient in utilizing powerful tools like Tailwind CSS and Bootstrap to streamline development and ensure sleek, responsive designs. My backend expertise includes working with databases such as MongoDB and SQL Server, enabling robust data management and integration.
//   `
//   const fourth = `
//   But it's not just about code for me – it's about creating connections. I believe in the power of effective communication and collaboration, working closely with clients to understand their vision and bring it to life. Whether it's building a sleek social media platform or refining existing processes with automation, I'm driven by a commitment to excellence and innovation.
//   `
//   const fifth = `
//   When I'm not coding, you'll find me exploring the depths of history or pondering the mysteries of philosophy. I believe in the importance of lifelong learning and continuous growth, both personally and professionally.
//   `
//   const sixth = `
//   Ready to embark on a journey of digital transformation? Let's connect, collaborate, and code something incredible together. Welcome to the future of web development – let's make it unforgettable.
//   `

//   return (
//     <div className='mt-[100px] mb-[100px]'>
//       <div className='max-w-[80%] text-start mx-auto mt-3 my-5 text-sm md:text-base'>
//         {showFullText ? (
//           <>
//             {firstHalfText}
//             <br />
//             <br />
//             {secondHalfText}
//             <br />
//             <br />
//             {third}
//             <br />
//             <br />
//             {fourth}
//             <br />
//             <br />
//             {fifth}
//             <br />
//             <br />
//             {sixth}
//             <br />

//             <button
//               onClick={toggleTextVisibility}
//               className='text-blue-500  hover:underline'
//             >
//               Read less
//             </button>
//           </>
//         ) : (
//           <>
//             {firstHalfText}
//             <br />
//             <br />
//             {secondHalfText}

//             <button
//               onClick={toggleTextVisibility}
//               className='text-blue-500  hover:underline'
//             >
//               Read more
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   )
// }

// const Page = () => {
//   return (
//     <div>
//       <AboutText />
//     </div>
//   )
// }

// export default AboutText




'use client'
import React, { useState } from 'react'

const AboutText = () => {
  const [showFullText, setShowFullText] = useState(false)

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText)
  }


  const firstHalfText = `
  Welcome to my corner of the web! I'm Luqman Matloob, a dedicated software developer with a passion for crafting immersive digital experiences. With a blend of creativity and technical expertise, I transform ideas into stunning, user-friendly interfaces that captivate and delight.
  Over the past two years, I've honed my skills in HTML, CSS, and JavaScript, building a strong foundation in web development. Specializing in frameworks like React and Next.js, I thrive on creating dynamic and interactive applications that push the boundaries of user engagement.
  
    
    `

  const secondHalfText = `
  Furthermore, I'm proficient in utilizing powerful tools like Tailwind CSS and Bootstrap to streamline development and ensure sleek, responsive designs. My backend expertise includes working with databases such as MongoDB and SQL Server, enabling robust data management and integration.

  `
  const third = `
  Before transitioning to web development, I honed my skills in automating tasks within Excel using VBA, streamlining processes, and performing data cleaning and analysis. Additionally, I specialized in automating and cleaning data within Google Sheets and Google Apps Script to enhance efficiency and productivity.

  `
  const fourth = `
  But for me it's not just about code for me – it's about creating connections. I believe in the power of effective communication and collaboration, working closely with clients to understand their vision and bring it to life. Whether it's building a sleek social media platform or refining existing processes with automation, I'm driven by a commitment to excellence and innovation.

  `
  const fifth = `
  When I'm not coding, you'll find me exploring the depths of history or pondering the mysteries of philosophy. I believe in the importance of lifelong learning and continuous growth, both personally and professionally.

  `
  const sixth = `
  Ready to embark on a journey of digital transformation? Let's connect, collaborate, and code something incredible together.

  `

  return (
    <div className='mt-[100px] mb-[100px]'>
      <div className='max-w-[80%] text-start mx-auto mt-3 my-5 text-sm md:text-base'>
        {showFullText ? (
          <>
            {firstHalfText}
            <br />
            <br />
            {secondHalfText}
            <br />
            <br />
            {third}
            <br />
            <br />
            {fourth}
            <br />
            <br />
            {fifth}
            <br />
            <br />
            {sixth}
            <br />

            <button
              onClick={toggleTextVisibility}
              className='text-blue-500  hover:underline'
            >
              Read less
            </button>
          </>
        ) : (
          <>
            {firstHalfText}
            <br />
            <br />
            {secondHalfText}

            <button
              onClick={toggleTextVisibility}
              className='text-blue-500  hover:underline'
            >
              Read more
            </button>
          </>
        )}
      </div>
    </div>
  )
}

const Page = () => {
  return (
    <div>
      <AboutText />
    </div>
  )
}

export default AboutText
