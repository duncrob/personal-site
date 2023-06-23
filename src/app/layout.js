import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Duncan Krey',
  description: 'Duncan Krey Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body
        suppressHydrationWarning={true}
        className={inter.className + ' min-h-screen bg-slate-900 bg-scroll leading-relaxed text-slate-400 antialiased selection:bg-sky-300 selection:text-blue-900'}
        >
          {children}
        </body>
    </html>
  )
}
