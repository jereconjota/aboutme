import './globals.css'
import { Share_Tech_Mono } from 'next/font/google'
import Toggle from '../../components/Toggle'
import { i18n } from '../../i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const ShareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'Jere',
  description: 'About me',
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={ShareTechMono.className}>
        {/* <Toggle /> */}
        {children}
      </body>
    </html>
  )
}
