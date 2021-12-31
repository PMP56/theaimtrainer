import type { NextPage } from 'next'
import Head from 'next/head'
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
      </div>

    </main>
  )
}

export default Home
