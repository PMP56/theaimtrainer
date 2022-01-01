import type { NextPage } from "next";
import { Fragment, useContext, useEffect, useState } from "react";
import styles from "../../styles/Toolbox.module.css"
import { GlobalContext } from "../contexts/GlobalContext";

const ToolBox: NextPage = () => {
    const [open, setOpen] = useState(false);
    
    const {multiplier, setMultiplier, spawnTime, setSpawnTime, lifeTime, setLifeTime} = useContext(GlobalContext)
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
        const value = event.target.value
        setSpawnTime(value)
    }

    
    const openToolbox = () => {
        setOpen(!open)
    }

    return (
        <div className={styles.toolbox} style={{width: (!open)? '40px': '70vw'}}>
            {(open)?   
                <div className={styles.contents}>
                    <div className={styles.eachContent}>
                        <h4>Difficulty: {gridLevel}</h4>
                        <input value={gridLevel} type="range" min="1" max="2.5" step="0.1" onChange={(e) => levelChange(e)} />
                        {/* <button onClick={() => setLevel(1)}>Easy</button>
                        <button onClick={() => setLevel(1.5)}>Medium</button>
                        <button onClick={() => setLevel(2)}>Hard</button> */}
                    </div>
                    <div className={styles.eachContent}>
                        <h4>Spawn Time</h4>
                        <input value={spawnTime} type="range" min="2" max="10" step="2" onChange={(e) => spawnTimeChange(e)}></input>
                    </div>
                    <div className={styles.eachContent}>
                        <h4>Life Time of Target</h4>
                        <input type="range" min="1" max="100" value="50" />
                    </div>
                </div> 
                    : 
                <Fragment />
            }
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white" onClick={() => openToolbox()}>
                <g><rect fill="none" height="24" width="24"/></g>
                <g><g><polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12"/><polygon points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12"/></g></g>
            </svg>
        </div>
    )
}

export default ToolBox