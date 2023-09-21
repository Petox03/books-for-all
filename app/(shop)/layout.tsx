import '../globals.css'
import type { Metadata } from 'next'
import Image from 'next/image';
import { Inter } from 'next/font/google'
import Nav from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Libros Para Todos',
  description: 'E-Commerce de libros para todos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Nav></Nav>
        <main className='p-6 mt-6'>
          {children}
        </main>
      </body>
    </html>
  )
}
