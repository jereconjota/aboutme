import './globals.css'
import { Share_Tech_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const ShareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'About Jere',
  description: 'Developer & Dragon Ball lover'
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={ShareTechMono.className}>
        {/* <Toggle /> */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
