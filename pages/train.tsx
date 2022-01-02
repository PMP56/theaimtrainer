import type { NextPage } from "next";
import Grid from "./components/grid";
import ToolBox from "./components/toolbox";
import Result from "./components/result";
import { GlobalContext, GlobalProvider } from "./contexts/GlobalContext";

import styles from "../styles/Train.module.css";
import { useContext } from "react";
import Head from "next/head";

const Train: NextPage = () => {
    // const list = Array(20).fill(<RowHexa />)
    
    return (
        <GlobalProvider>
            <Head>
                <title>Train | The Aim Trainer - Improve your aim in FPS games</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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