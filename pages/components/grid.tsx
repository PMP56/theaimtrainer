import type { NextPage } from "next";
import { Fragment, useContext, useEffect, useState } from "react";
import Modal from 'react-modal';

import styles from "../../styles/Grid.module.css";
import { GlobalContext } from "../contexts/GlobalContext";
import RowHexa from "./rowHexa";

Modal.setAppElement('body');

const Grid: NextPage = () => {
    const list = Array.from({length: 31}, (_, index) => <RowHexa index={index} />)
    const { multiplier, gridSize, score, setScore, currentHexa, setCurrentHexa, pause, setPause } = useContext(GlobalContext)

    const getRandomHexa = (m: number, n: number): number => {
        return Math.floor(Math.random() * m*n);
    }

    const [countDown, setCountDown] = useState(3);
    const [isCountdownOpen, setIsCountdownOpen] = useState(true);
    const [isPauseOpen, setIsPauseOpen] = useState(false);

    const closePauseModal = () => {
        // setIsPauseOpen(false)
        setPause(false)
    }

    document.body.onkeyup = function(e){
        if(e.key == " "){
            setPause(!pause)
        }
    }

    const spawnGrids = () => {
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

        const x = setInterval(() => {
            if (!pause){
                const currentRandom = getRandomHexa(lower, upper)
                let currentRandomHexa: HTMLElement | null = document.getElementById(`hexa${currentRandom}`);
                
                setCurrentHexa([currentRandom, ...currentHexa])
            }
        }, 1000)
    }

    useEffect(() => {
        if (isCountdownOpen){
            setTimeout(() => {
                if (countDown > 1) {
                    setCountDown(countDown - 1);
                } else {
                    setIsCountdownOpen(false)
                    setCountDown(3)
                    spawnGrids()
                }
            }, 1000)
        }
    }, [countDown])

    return (
        <div className={styles.gridBody}>
            <Modal
                isOpen={isCountdownOpen}
                contentLabel="Example Modal"
                className={styles.pauseModal}
                overlayClassName={styles.Overlay}
            >
                <h2 style={{fontSize: '128px', fontWeight: '400'}}>{countDown}</h2>
            </Modal>
            <Modal
                isOpen={pause}
                onRequestClose={closePauseModal}
                contentLabel="Example Modal"
                className={styles.pauseModal}
                overlayClassName={styles.Overlay} 
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="120px" viewBox="0 0 24 24" width="120px" fill="white">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M8 5v14l11-7L8 5z"/>
                </svg>
                <p style={{fontSize: '13px'}}>(Press SPACE to continue)</p>
            </Modal>
            {list.map((result, index) => <Fragment key={index}>{result}</Fragment>)}
        </div>
    )
}

export default Grid