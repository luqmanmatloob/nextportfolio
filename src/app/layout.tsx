
import { Inter } from 'next/font/google'
import './globals.css'
import Header from 'src/components/header'
import Footer from 'src/components/Footer'
import NextTopLoader from 'nextjs-toploader';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Luqman Matloob | Front-End Developer',
  description: 'I am Luqman, a Front-end Developer and a student pursuing, degree in Information Technology, I wield a diverse skill set, including expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind, React, Next.js, Git, GitHub, Figma, XD, and Photoshop',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />

        <Header />
        {children}
        {/* <Footer /> */}
        <Footer />



      </body>
    </html>
  )
}
