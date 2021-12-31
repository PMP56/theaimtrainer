import type { NextPage } from "next";
import Grid from "./components/grid";
import ToolBox from "./components/toolbox";
import Result from "./components/result";
import { GlobalContext, GlobalProvider } from "./contexts/GlobalContext";

import styles from "../styles/Train.module.css";
import { useContext } from "react";

const Train: NextPage = () => {
    // const list = Array(20).fill(<RowHexa />)
    
    return (
        <GlobalProvider>
            <div className={styles.trainBody}>
                <ToolBox />
                <Result />
                <Grid />
            </div>
        </GlobalProvider>
    )
}

export default Train