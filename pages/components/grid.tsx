import type { NextPage } from "next";
import { Fragment, useContext, useEffect } from "react";
import styles from "../../styles/Grid.module.css";
import { GlobalContext } from "../contexts/GlobalContext";
import RowHexa from "./rowHexa";

const Grid: NextPage = () => {
    const list = Array.from({length: 31}, (_, index) => <RowHexa index={index} />)
    const { multiplier, gridSize, score, setScore, currentHexa, setCurrentHexa } = useContext(GlobalContext)

    const getRandomHexa = (m: number, n: number): number => {
        return Math.floor(Math.random() * m*n);
    }


    useEffect(() => {
        const [lower, upper] = gridSize[multiplier]
        
        // setTimeout(() => {
        //     const currentRandom = getRandomHexa(lower, upper)
        //     // let currentRandomHexa: HTMLElement | null = document.getElementById(`hexa${currentRandom}`);
        //     setCurrentHexa([currentRandom, ...currentHexa])
        //     // console.log(currentHexa)
        //     // if (currentRandomHexa) {
        //     //     currentRandomHexa.style.fill = "yellow"
        //     //     // console.log(currentHexa)
        //     // };
        //     // setTimeout(() => {
        //     //     setCurrentHexa(currentHexa.shift())
                   
        //     // }, 1500)
        // }, 1000)


        setInterval(() => {
            const currentRandom = getRandomHexa(lower, upper)
            let currentRandomHexa: HTMLElement | null = document.getElementById(`hexa${currentRandom}`);
            
            setCurrentHexa([currentRandom, ...currentHexa])

        }, 1000)
    }, [0])

    return (
        <div className={styles.gridBody}>
            {list.map((result, index) => <Fragment key={index}>{result}</Fragment>)}
        </div>
    )
}

export default Grid