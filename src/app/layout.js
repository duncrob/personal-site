import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Duncan Krey',
  description: 'Duncan Krey Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + 'bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-blue-300 selection:text-blue-900'}>{children}</body>
    </html>
  )
}
