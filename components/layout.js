import Head from 'next/head'
import Image from 'next/image'

const name = 'Jeremias Figueroa'
const at = '@jereconjota'
export const siteTitle = 'About Jere'

export default function Layout({ children, home }) {
  return (
    <div className='container'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="something about me"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fprofile.jpg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>
      <header className='header'>
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className='borderCircle'
            height={144}
            width={144}
            alt={name}
          />
          <h1 >{name}</h1>
          <h2>{at}</h2>
        </>

      </header>
      <main>{children}</main>
    </div>
  )
}
