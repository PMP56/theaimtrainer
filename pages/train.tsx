import type { NextPage } from "next";
import Grid from "./components/grid";
import ToolBox from "./components/toolbox";
import Result from "./components/result";
import { GlobalContext, GlobalProvider } from "./contexts/GlobalContext";

import styles from "../styles/Train.module.css";
import { useContext, useEffect, useRef } from "react";
import Head from "next/head";

const Train: NextPage = () => {
    // const list = Array(20).fill(<RowHexa />)

    return (
        <GlobalProvider>
            <Head>
                <title>Train | The Aim Trainer - Train and Improve your aim in FPS games</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta  name="description" content="The Aim Trainer is a free aim trainer helps you practice and improve your aim in any FPS game such as Valorant, Fortnite, Counter-Strike: GO, and Call of Duty. Practice and Test your Aim Performance Online. No Installation Required." />
                <meta key="keywords" name="keywords" content="the aim trainer, aim trainer, FPS trainer, FPS, improve aim, boost aim, practice targets, practice aiming, FPS games" />
                <meta name='robots' content='all' />
            </Head>
            <div className={styles.trainBody}>
                <ToolBox />
                <Result />
                <Grid />
            </div>
        </GlobalProvider>
    )
}

export default Train