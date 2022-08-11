import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from "react";
import Cat from '../components/cat'

export default function Home() {

  const [darkTheme, setDarkTheme] = useState(false);
  const [catUrl, setCatUrl] = useState("/images/michino.gif");
  const [twitty, setTwitty] = useState("/images/twitty.png");
  const [github, setGithub] = useState("/images/github.png");
  const [blog, setBlog] = useState("/images/blog.png");
  const [checked, setChecked] = useState(true);

  const easteregg = () => {
    setChecked(!checked);
    setDarkTheme(checked);
    if (checked) {
      setCatUrl("/images/rami.gif");
      setTwitty("/images/twitty-l.png");
      setGithub("/images/github-l.png");
      setBlog("/images/blog-l.png");
    } else {
      setCatUrl("/images/michino.gif");
      setTwitty("/images/twitty.png");
      setGithub("/images/github.png");
      setBlog("/images/blog.png");
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;
    // const initialColorValue = root.style.getPropertyValue(
    //   "--initial-color-mode",
    // );
    setDarkTheme(false);
  }, []);

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        </Head>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <Link href="https://github.com/jereconjota">
                <a target="_blank"><Image src={github} alt="Github" width={36} height={36} /></a>
              </Link>
            </li>
            <li className={utilStyles.listItem}>
              <Link href="https://notes.jereconjota.com">
                <a target="_blank"><Image src={blog} alt="blog" width={36} height={36} /></a>
              </Link>
            </li>
            <li className={utilStyles.listItem}>
              <Link href="https://twitter.com/jereconj0ta">
                <a target="_blank"><Image src={twitty} alt="twitter" width={36} height={36} /></a>
              </Link>
            </li>
          </ul>
          <p>
            I am a backend developer from Comodoro Rivadavia, I currently work remotely for <a href="https://www.genosha.com.ar/" target="_blank">Genosha</a>.
            Since last month I have been really interested in NextJS.
            I believe it is important to know how to approach and resolve problems, then we can choose what technologies to use.
            That is why I try to learn a little bit more every day.
          </p>
        </section>
      </Layout>'
      <div onClick={easteregg}>
        <Cat url={catUrl} />
      </div>
    </>
  )
}

