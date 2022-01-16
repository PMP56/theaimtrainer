import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties, Fragment } from 'react'
import styles from '../styles/Home.module.css'
import MovingGradient from './components/movingGradient'
import RowHexa from './components/rowHexa'
import RowHexaMin from './components/rowHexaMin'

const Home: NextPage = () => {
  const cardGrid = Array.from({length: 11 }, (_, index) => <RowHexaMin index={index} count={10} left={1000} color='#131316' multiplier={1.8} />)
  const articleGrid = Array.from({length: 12 }, (_, index) => <RowHexaMin index={index} count={40} left={40} color='rgb(19, 19, 22)' multiplier={1.5} />)
  const movingGradients = Array.from({length: 12 }, (_, index) => <MovingGradient direction={'x'} top={index * 52 + 30} left={0} />)
  const movingGradientsVerical = Array.from({length: 40 }, (_, index) => <MovingGradient direction={'y'} top={0} left={index * 90 - 2} />)
  
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
                  {cardGrid.map((result, index) => <Fragment key={index}>{result}</Fragment>)}
                </div>
                <h3 className={styles.cardTitle}>TRAIN</h3>
              </div>
            </Link>
          </div>
          <div className={styles.card}>
          <Link href={'/test'} passHref>
              <div className={styles.cardInner}>
                <div className={styles.gridHolder}>
                  {cardGrid.map((result, index) => <Fragment key={index}>{result}</Fragment>)}
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
      <div className={styles.information}>
        <div className={styles.articleHolder}>
          {/* <div className={styles.movingGradient}></div> */}
          <div 
            className={styles.movingGradient2} 
            style={{"--speed": `${(Math.random() * 5) + 25}s`} as CSSProperties}>
          </div>
          <div 
            className={styles.movingGradient3} 
            style={{"--speed": `${(Math.random() * 5) + 25}s`} as CSSProperties}>
          </div>
          
          {movingGradients.map((result, index) => <Fragment key={index}>{result}</Fragment>)}
          {movingGradientsVerical.map((result, index) => <Fragment key={index}>{result}</Fragment>)}
          
          <div className={styles.gridHolder}>
            {articleGrid.map((result, index) => <Fragment key={index}>{result}</Fragment>)}
          </div>
          <article className={styles.article}>
            <h1>The Aim Trainer</h1>
            <h3>
              The Aim Trainer is a free aim trainer helps you practice and improve your aim in any FPS game such as Valorant, Fortnite, Counter-Strike: GO, and Call of Duty. Practice and Test your Aim Performance Online without any installation required. The Aim Trainer comes with a lot of customization options and different challenges that are specifically created to help the player improve different aspects of aiming. Professional players spend upto 12 hours a day practicing thier aim so that they can perform good in a tournament. Give your gaming career the initial push it required with The Aim Trainer.
            </h3>
          </article>
        </div>
      </div>

    </main>
  )
}

export default Home
