import './globals.css'
import { Share_Tech_Mono } from 'next/font/google'
import Toggle from '../components/Toggle'

const ShareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'About Jere',
  description: 'Developer & Dragon Ball lover',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={ShareTechMono.className}>
        {/* <Toggle /> */}
        {children}
      </body>
    </html>
  )
}
