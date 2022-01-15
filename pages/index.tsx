import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import styles from '../styles/Home.module.css'
import RowHexa from './components/rowHexa'
import RowHexaMin from './components/rowHexaMin'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>The Aim Trainer - Train and Improve your aim in FPS games</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta  name="description" content="The Aim Trainer is a free aim trainer helps you practice and improve your aim in any FPS game such as Valorant, Fortnite, Counter-Strike: GO, and Call of Duty. Practice and Test your Aim Performance Online. No Installation Required." />
        <meta key="keywords" name="keywords" content="the aim trainer, aim trainer, FPS trainer, FPS, improve aim, boost aim, practice targets, practice aiming, FPS games" />
        <meta name='robots' content='all' />  
        <link rel="canonical" href="https://www.theaimtrainer.com" key="canonical" />

      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>The Aim Trainer</h1>
          <h3>Go professional with your gaming career</h3>
        </header>
        
        <div className={styles.body}>
          <div className={styles.card}>
            <Link href={'/train'} passHref>
              <div className={styles.cardInner}>
                <div className={styles.gridHolder}>
                  <RowHexaMin index={0} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={1} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={2} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={3} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={4} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={5} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={6} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={7} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={8} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={9} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={10} count={10} left={1000} color='#131316' multiplier={1.8} />
                </div>
                <h3 className={styles.cardTitle}>TRAIN</h3>
              </div>
            </Link>
          </div>
          <div className={styles.card}>
          <Link href={'/test'} passHref>
              <div className={styles.cardInner}>
                <div className={styles.gridHolder}>
                  <RowHexaMin index={0} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={1} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={2} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={3} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={4} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={5} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={6} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={7} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={8} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={9} count={10} left={1000} color='#131316' multiplier={1.8} />
                  <RowHexaMin index={10} count={10} left={1000} color='#131316' multiplier={1.8} />
                </div>
                <h3 className={styles.cardTitle}>TEST</h3>
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
