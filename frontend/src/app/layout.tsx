import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from "@/app/layout/Navigation"
import Footer from "@/app/layout/Footer"
import Banner from './layout/Banner'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg w-full">
          <Navigation/>
          <Banner/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
