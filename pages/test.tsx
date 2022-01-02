import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Test.module.css'

const Test: NextPage = () => {
    return(
        <div className={styles.test}>
            <Head>
                <title>Test | The Aim Trainer - Improve your aim in FPS games</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            Test coming soon...
        </div>
    )
}

export default Test