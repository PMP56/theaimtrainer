import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>The Aim Trainer - Improve your aim in FPS games</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>The Aim Trainer</h1>
          <h3>Go professional with your gaming career</h3>
        </header>
        <div className={styles.body}>
          <div className={styles.card}>
            <Link href={'/train'}>
              <div className={styles.cardInner}>
                  <h3>Train</h3>
              </div>
            </Link>
          </div>
          <div className={styles.card}>
          <Link href={'/test'}>
              <div className={styles.cardInner}>
                  <h3>Test</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.otherGames}>
          <Image src={'/resources/valorant.png'} alt='Valorant' width={146} height={100}/>
          <Image src={'/resources/fortnite.png'} alt='Fortnite' width={158} height={50}/>
          <Image src={'/resources/pubg.jpg'} alt='PUBG Desktop' width={100} height={100}/>
          <Image src={'/resources/csgo.png'} alt='CS GO' width={80} height={90}/>
          <Image src={'/resources/apex.png'} alt='Apex Legend' width={90} height={90}/>
        </div>
      </div>

    </main>
  )
}

export default Home
