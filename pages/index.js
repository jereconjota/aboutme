import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function Home() {

  const [darkTheme, setDarkTheme] = useState(false);
  const [cat, setCat] = useState("michino");
  const [twitty, setTwitty] = useState("/images/twitty.png");
  const [github, setGithub] = useState("/images/github.png");
  const [blog, setBlog] = useState("/images/blog.png");
  const [checked, setChecked] = useState(true);

  const easteregg = () => {
    setChecked(!checked);
    setDarkTheme(checked);
    if (checked) {
      setCat("rami");
      setTwitty("/images/twitty-l.png");
      setGithub("/images/github-l.png");
      setBlog("/images/blog-l.png");
    } else {
      setCat("michino");
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

        <section className='info'>
          <ul className='list'>
            <li className='listItem'>
              <Link href="https://github.com/jereconjota" target='_blank'>
                <Image src={github} alt="Github" width={36} height={36} />
              </Link>
            </li>
            <li className='listItem'>
              <Link href="https://notes.jereconjota.com" target='_blank'>
                <Image src={blog} alt="blog" width={36} height={36} />
              </Link>
            </li>
            <li className='listItem'>
              <Link href="https://twitter.com/jereconj0ta" target='_blank'>
                <Image src={twitty} alt="twitter" width={36} height={36} />
              </Link>
            </li>
          </ul>
          <p onClick={easteregg} >
            I am a backend developer from Comodoro Rivadavia, I currently work remotely for <a href="https://www.genosha.com.ar/" target="_blank">Genosha</a>.
            I believe it is important to know how to approach and resolve problems, then we can choose what technologies to use.
            That is why I try to learn a little bit more every day.
          </p>
        </section>

        <div className='easteregg'>
          <p className='catName'>{cat}</p>
          <div className={cat}></div>
        </div>
      </Layout>
    </>
  )
}

