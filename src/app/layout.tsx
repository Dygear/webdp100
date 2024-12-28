import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebDP100',
  description: 'Web-based interface for DP100 power supply',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style="background: #0d1117; color: #F0F6FC">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
