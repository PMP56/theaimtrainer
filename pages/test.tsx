import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Test.module.css'

const Test: NextPage = () => {
    return(
        <div className={styles.test}>
            <Head>
                <title>Test | The Aim Trainer - Train and Improve your aim in FPS games</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta  name="description" content="The Aim Trainer is a free aim trainer helps you practice and improve your aim in any FPS game such as Valorant, Fortnite, Counter-Strike: GO, and Call of Duty. Practice and Test your Aim Performance Online. No Installation Required." />
                <meta key="keywords" name="keywords" content="the aim trainer, aim trainer, FPS trainer, FPS, improve aim, boost aim, practice targets, practice aiming, FPS games" />
                <meta name='robots' content='all' />
            </Head>
            Test coming soon...
        </div>
    )
}

export default Test