import Info from '../../components/Info'
import Hero from '../../components/Hero'
import styles from './page.module.css'

async function getPersonalData(lang) {
  const res = await fetch('https://eipiai.vercel.app/api/data-jere');
  const data = await res.json();
  const dataLang = await data.find((item) => item.lang === lang);
  return dataLang;
}


export default async function Home({ params }) {
  const data = await getPersonalData(params.lang);
  return (
    <main className='main'>
      {data && <Hero data={data}/> }
      {data && <Info data={data}/> }
      
      <div className={styles.easteregg} >
        <p className={styles.catName}>michino</p>
        <div className={styles.michino}></div>
      </div>

    </main>
  )
}
