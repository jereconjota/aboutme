import "@theme-toggles/react/css/Simple.css"
import LinkList from '../components/LinkList';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { useEffect, useState } from "react";
import { Simple } from "@theme-toggles/react"

const companyLink = '<a href="https://www.genosha.com.ar/" target="_blank">Genosha</a>';
const en = `I am a backend developer from Comodoro Rivadavia, I currently work remotely for ${companyLink}. </br>I believe it is important to know how to approach and resolve problems, then we can choose what technologies to use. That is why I try to learn a little bit more every day.`
const es = `Soy desarrollador backend de la ciudad de Comodoro Rivadavia, altualmete trabajo de manera remota para  ${companyLink}. </br> Creo en la importancia de entender como encarar un proyecto, para saber elegir las mejores herramientas y tecnologias para resolverlo. Es por eso que intento aprender un poco mas cada dia.`

const LANGUAGE = ['es', 'es-AR', 'es-MX', 'es-419'];

export default function Home() {

  const [darkTheme, setDarkTheme] = useState(false);
  const [cat, setCat] = useState("michino");
  const [aboutMe, setAboutMe] = useState('')

  const theme = () => {
    setDarkTheme(!darkTheme);
    if (darkTheme) {
      setCat("michino");
    } else {
      setCat("rami");
    }
  };

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

  useEffect(() => {
    setAboutMe(LANGUAGE.includes(navigator.language) ? es : en)
  }, [])

  return (
    <>
      <div style={{display:"flex", flexDirection:"row-reverse"}}>
        <Simple duration={500} style={{color: "#61dafb"}} onToggle={theme}/>
      </div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className='info'>
          <p dangerouslySetInnerHTML={{ __html: aboutMe }} ></p>
          <LinkList theme={darkTheme} />
        </section>

        <div className='easteregg' >
          <p className='catName'>{cat}</p>
          <div className={cat}></div>
        </div>
      </Layout>
    </>
  )
}

