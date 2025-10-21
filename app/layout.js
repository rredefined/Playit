import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KynexLabs - Game Server & VPS Hosting',
  description: 'Professional game server and VPS hosting solutions with locations worldwide.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 
