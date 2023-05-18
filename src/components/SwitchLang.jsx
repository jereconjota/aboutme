// 'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function SwitchLang() {

    const pathName = usePathname()
    const redirectedPathName = (locale) => {
      if (!pathName) return '/'
      const segments = pathName.split('/')
      segments[1] = locale
      return segments.join('/')
    }



    return (
        <div style={{ textAlign: 'center', width: '100%', fontSize: "small" }}>
            <Link href={redirectedPathName('en')} className={pathName === '/en' ? 'select' : ''} >en</Link> / <Link href={redirectedPathName('es')} className={pathName === '/es' ? 'select' : ''}>es</Link>
        </div>
    )
}

export default SwitchLang