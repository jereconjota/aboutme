import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home({ allPostsData }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="https://github.com/jereconjota">
              <a target="_blank"><Image src="/images/github.png" alt="Github" width={36} height={36} /></a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://notes.jereconjota.com">
              <a target="_blank"><Image src="/images/blog.png" alt="blog" width={36} height={36} /></a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://twitter.com/jereconj0ta">
              <a target="_blank"><Image src="/images/twitty.png" alt="twitter" width={36} height={36} /></a>
            </Link>
          </li>
        </ul>
        <p>I am a backend developer from Comodoro Rivadavia, I currently work remotely for <a href="https://www.genosha.com.ar/" target="_blank">Genosha</a>.
          Since last month I have been really interested in NextJS.
          I believe it is important to know how to approach and resolve problems, then we can choose what technologies to use.
          That is why I try to learn a little bit more every day.</p>
      </section>
    </Layout>
  )
}

