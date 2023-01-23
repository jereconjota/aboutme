import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function Home() {

  const [darkTheme, setDarkTheme] = useState(false);
  const [cat, setCat] = useState("michino");
  const [twitty, setTwitty] = useState("twitter");
  const [github, setGithub] = useState("github");
  const [blog, setBlog] = useState("dino");
  const [linkedin, setLinkedin] = useState("linkedin")
  const [checked, setChecked] = useState(true);

  const easteregg = () => {
    setChecked(!checked);
    setDarkTheme(checked);
    if (checked) {
      setCat("rami");
      setTwitty("twitter-white");
      setGithub("github-white");
      setBlog("dino-white");
      setLinkedin("linkedin-white")
    } else {
      setCat("michino");
      setTwitty("twitter");
      setGithub("github");
      setBlog("dino");
      setLinkedin("linkedin")
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
          <p onClick={easteregg} >
            I am a backend developer from Comodoro Rivadavia, I currently work remotely for <a href="https://www.genosha.com.ar/" target="_blank">Genosha</a>.
            I believe it is important to know how to approach and resolve problems, then we can choose what technologies to use.
            That is why I try to learn a little bit more every day.
          </p>
          <ul className='list'>
            <li className='listItem'>
              <Link href="https://notes.jereconjota.com" target='_blank'>
                <div className='icon-box'>
                  <div className={blog}></div>
                </div>
              </Link>
            </li>
            <li className='listItem'>
              <Link href="https://github.com/jereconjota" target='_blank'>
                <div className='icon-box'>
                  <div className={github}></div>
                </div>
              </Link>
            </li>
            <li className='listItem'>
              <Link href="https://twitter.com/jereconj0ta" target='_blank'>
                <div className='icon-box'>
                  <div className={twitty}></div>
                </div>
              </Link>
            </li>
            <li className='listItem'>
              <Link href="https://www.linkedin.com/in/jereconjota/" target='_blank'>
                <div className='icon-box'>
                  <div className={linkedin}></div>
                </div>
              </Link>
            </li>
          </ul>
        </section>

        <div className='easteregg' onClick={easteregg}>
          <p className='catName'>{cat}</p>
          <div className={cat}></div>
        </div>
      </Layout>
    </>
  )
}

