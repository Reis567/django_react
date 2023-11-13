import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './reset.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Django + React',
  description: 'Created by Reis567',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
