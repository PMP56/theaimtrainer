import type { NextPage } from "next";
import { Fragment, useContext, useEffect, useState } from "react";
import styles from "../../styles/Toolbox.module.css"
import { GlobalContext } from "../contexts/GlobalContext";

const ToolBox: NextPage = () => {
    const [open, setOpen] = useState(false);
    
    const {multiplier, setMultiplier, spawnTime, setSpawnTime, lifeTime, setLifeTime, setPause} = useContext(GlobalContext)
    const [gridLevel, setGridLevel] = useState(1);

    useEffect(() => {
        setGridLevel(multiplier)
    }, [0])

    const levelChange = (event: {target: HTMLInputElement}) => {
        const value = event.target.value
        setGridLevel(parseFloat(value))
        console.log(value)
        setMultiplier(value)
    }

    const spawnTimeChange = (event: {target: HTMLInputElement}) => {
        const value: number = parseFloat(event.target.value)
        setSpawnTime((1 / value) * 1000)
    }

    
    const openToolbox = () => {
        setOpen(!open)
        setPause(true)
    }

    return (
        <div className={styles.toolbox} 
            style={{left: (open)? '0px' : '-15.5vw', backgroundColor: (open)? 'rgb(22, 32, 41)' : 'rgb(52, 149, 240)'}}
        >
            {(open)?   
                <div className={styles.contents}>
                    <h2 style={{color: 'white'}}>Settings</h2>
                    <div className={styles.block}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="white">
                            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                        </svg>
                        <div className={styles.eachContent}>
                            <h4>Difficulty: {gridLevel}</h4>
                            <input className={styles.range} value={gridLevel} type="range" min="1" max="2.5" step="0.1" onChange={(e) => levelChange(e)} />
                        </div>
                    </div>
                    <div className={styles.block}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="white">
                            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 1H9v2h6V1zm4.03 6.39l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-.32-5H6.35c.57 1.62 1.82 2.92 3.41 3.56l-.11-.06 2.03-3.5zm5.97-4c-.57-1.6-1.78-2.89-3.34-3.54L12.26 11h5.39zm-7.04 7.83c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9-2.85 4.92zM7.55 8.99C6.59 10.05 6 11.46 6 13c0 .34.04.67.09 1h4.72L7.55 8.99zm8.79 8.14C17.37 16.06 18 14.6 18 13c0-.34-.04-.67-.09-1h-4.34l2.77 5.13zm-3.01-9.98C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56 2.72-4.7z"/>
                        </svg>
                        <div className={styles.eachContent}>
                            <h4>Spawn Speed: {1000 / spawnTime}x</h4>
                            <input className={styles.range} value={1000 / spawnTime} type="range" min="1" max="2" step="0.2" onChange={(e) => spawnTimeChange(e)}></input>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="white">
                            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                        <div className={styles.eachContent}>
                            <h4>Life Time of Target</h4>
                            <input className={styles.range} type="range" min="1" max="100" value="50" onChange={() => {}} />
                        </div>
                    </div>
                </div> 
                    : 
                <Fragment />
            }
            <svg style={{position: 'absolute', right: '12px', transform: (open)? 'rotate(180deg)' : 'rotate(0deg)', transitionDuration: '0.3s'}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white" onClick={() => openToolbox()}>
                <g><rect fill="none" height="24" width="24"/></g>
                <g><g><polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12"/><polygon points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12"/></g></g>
            </svg>
        </div>
    )
}

export default ToolBox