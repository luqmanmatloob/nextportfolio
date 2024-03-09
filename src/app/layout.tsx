
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/header'
import Footer from '../components/Footer'
import NextTopLoader from 'nextjs-toploader';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Luqman Matloob | Software Developer',
  description: `
  I'm Luqman Matloob, a dedicated software developer with a passion for crafting immersive digital experiences. With a blend of creativity and technical expertise, I transform ideas into stunning, user-friendly interfaces that captivate and delight.  
  `
}


export default function RootLayout({children}: {children: React.ReactNode}) 
{
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
        <Footer />

      </body>
    </html>
  )
}
