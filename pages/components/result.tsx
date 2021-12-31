import type { NextPage } from "next";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

import styles from "../../styles/Result.module.css";

const Result: NextPage = () => {
    const {score} = useContext(GlobalContext);
    return(
        <div className={styles.score}>
            <h2>{`Score: ${score}`}</h2>
        </div>
    )
}

export default Result