import './globals.css'
import { VT323, Share_Tech_Mono } from 'next/font/google'
import Toggle from '../components/Toggle'

const jetBrainsMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'Jere',
  description: 'About me',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        {/* <Toggle /> */}
        {children}
      </body>
    </html>
  )
}
