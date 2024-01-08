import type { Metadata } from 'next'
import { Quantico } from 'next/font/google'
import './globals.css'

import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'

const quantico = Quantico({ weight: '700', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Pit Rivals',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quantico.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
