import Info from '../components/Info'
import Hero from '../components/Hero'
import styles from './page.module.css'

async function getPersonalData() {
  const res = await fetch('https://eipiai.vercel.app/api/data-jere');
  const data = await res.json();
  return data[0];
}


export default async function Home() {

  const data = await getPersonalData();

  return (

    <main className='main'>
      <Hero data={data}/>
      <Info data={data}/>

      <div className={styles.easteregg} >
        <p className={styles.catName}>michino</p>
        <div className={styles.michino}></div>
      </div>

    </main>
  )
}
