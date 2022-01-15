import type { NextPage } from "next";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import Modal from 'react-modal';

import styles from "../../styles/Grid.module.css";
import { GlobalContext } from "../contexts/GlobalContext";
import RowHexa from "./rowHexa";

Modal.setAppElement('body');

const Grid: NextPage = () => {
    const { multiplier, gridSize, score, setScore, currentHexa, setCurrentHexa, pause, setPause, spawnTime, fullScreen, setFullScreen} = useContext(GlobalContext)
    const [col, row] = gridSize[multiplier]
    
    const gridRef = useRef<HTMLDivElement>(null)
    const audioRef = useRef<HTMLAudioElement>(null)

    const playAudio = () => {
        if (audioRef.current){
            audioRef.current.volume = 0.5;
            audioRef.current.play()
        }
    }

    const list = Array.from({length: row }, (_, index) => <RowHexa playAudio = {playAudio} index={index} />)
    const [gridSpawned, setGridSpawned] = useState(false);


    const getRandomHexa = (m: number, n: number): number => {
        return Math.floor(Math.random() * m*n);
    }

    const closePauseModal = () => {
        setPause(false)
        if(!gridSpawned) setGridSpawned(true)
    }


    if (typeof window === 'object') {
        document.body.onkeyup = function(e){
            if(e.key == " "){
                setPause(!pause)
                if(!gridSpawned) setGridSpawned(true)
            }
        }

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState == "hidden"){
                setPause(true);
            }
        })
    }

    // useEffect(() => {
    //     if (gridRef.current){
    //         if (gridRef.current.requestFullscreen) {
    //             gridRef.current.requestFullscreen();
    //             setFullScreen(true)
    //         } 
    //         // if (document.exitFullscreen) {
    //         //     document.exitFullscreen();
    //         //     setFullScreen(false)
    //         // }
    //         // else if (gridRef.current.webkitRequestFullscreen) { /* Safari */
    //         // gridRef.current.webkitRequestFullscreen();
    //         // } else if (gridRef.current.msRequestFullscreen) { /* IE11 */
    //         // gridRef.current.msRequestFullscreen();
    //         // }
    //     }
    // }, [fullScreen])

    const spawnGrids = () => {
        const x = setInterval(() => {
            if (!pause){
                const currentRandom = getRandomHexa(col, row)
                // let currentRandomHexa: HTMLElement | null = document.getElementById(`hexa${currentRandom}`);
                
                setCurrentHexa([currentRandom, ...currentHexa])
            }
        }, spawnTime)
    }

    useEffect(() => {
        spawnGrids()
    }, [gridSpawned])


    return (
        <div ref={gridRef} className={styles.gridBody}>
            <Modal
                isOpen={pause}
                onRequestClose={closePauseModal}
                contentLabel="Example Modal"
                className={styles.pauseModal}
                overlayClassName={styles.Overlay} 
            >
                <svg xmlns="http://www.w3.org/2000/svg" 
                    height="120px" 
                    viewBox="0 0 24 24" 
                    width="120px" 
                    fill="white"
                    style={{cursor: 'pointer'}}
                    onClick={closePauseModal}
                >
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M8 5v14l11-7L8 5z"/>
                </svg>
                <p style={{fontSize: '13px'}}>(Press SPACE to continue)</p>
            </Modal>
            <audio ref={audioRef} id='audio' src='/resources/shoot.mp3' preload="auto" />
            {list.map((result, index) => <Fragment key={index}>{result}</Fragment>)}
        </div>
    )
}

export default Grid