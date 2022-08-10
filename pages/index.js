import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'


export default function Home({ allPostsData }) {

  let startTime = new Date().getTime();
  // console.log(window.screen.width);
  let walkTheCat = function () {
    let catEl = document.getElementById("cat");
    let currTime = new Date().getTime();
    let newRight = (((currTime - startTime) / 1000) * 100);
    catEl.style.right = newRight + "px";

    if (newRight < window.screen.width) {
      window.requestAnimationFrame(walkTheCat);
    } else {
      catEl.style.right = "0px";
      startTime = new Date().getTime();
      window.requestAnimationFrame(walkTheCat);
    }
  };

  useEffect(() => {
    walkTheCat();
  } , []);


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>

      <main className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="https://github.com/jereconjota">
              <a target="_blank"><Image src="/images/github.png" alt="Github" width={36} height={36} /></a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://notes.jereconjota.com">
              <a><Image src="/images/blog.png" alt="blog" width={36} height={36} /></a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://twitter.com/jereconj0ta">
              <a><Image src="/images/twitty.png" alt="twitter" width={36} height={36} /></a>
            </Link>
          </li>
        </ul>
      </main>
      <section className={utilStyles.headingMd}>
        <p>I am a backend developer from Comodoro Rivadavia, I currently work remotely for <a href="https://www.genosha.com.ar/" target="_blank">Genosha</a>.
          Since last month I have been really interested in NextJS.
          I believe it is important to know how to approach and resolve problems, then we can choose what technologies to use.
          That is why I try to learn a little bit more every day.</p>
      </section>
      <footer>
        <img id="cat" src="https://art.pixilart.com/sr2aa10ad38ee2e.gif" width="50" height="50" />
      </footer>
    </Layout>
  )
}

