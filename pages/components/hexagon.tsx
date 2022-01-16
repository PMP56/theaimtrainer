import type { NextPage } from "next";
import React, { FC, useContext, useEffect, useRef, useState } from "react";
import styles from '../../styles/Hexagon.module.css';
import { GlobalContext } from "../contexts/GlobalContext";


interface Props{
    index: number,
    playAudio: Function
}

const Hexagon: FC<Props> = (props) => {

    const {multiplier, score, setScore, currentHexa, setCurrentHexa, pause, setPause, lifeTime} = useContext(GlobalContext)
    const { index } = props
    const [isHighlight, setIsHighlight] = useState(false)
    const [isCorrect, setIsCorrect] = useState(0) //-1: incorrect (red), 0: neutral (orange), 1: correct (limegreen)

    const polygonRef = useRef<SVGPolygonElement>(null);
    const playAudio = props.playAudio

    useEffect(() => {
        if (!pause){
            if (currentHexa.includes(index) && !isHighlight){
                setIsHighlight(true);     
            }
        }
    }, [currentHexa])

    useEffect(() => {
        if (isHighlight && currentHexa.includes(index)){
            let x = setTimeout(() => {
                    if (!pause){
                        const newArray = currentHexa.filter((value) => {
                            return value != index
                        })
                        // setScore(score - 1)
                        setCurrentHexa(newArray)
                        setIsHighlight(false)
                        setIsCorrect(0)
                        clearTimeout(x)
                    }
            }, lifeTime)
        }
        // if (!isHighlight && isCorrect == -1){
        //     let x = setTimeout(() => {
        //         setIsCorrect(0)
        //     }, 1000)
        // }
    }, [isHighlight])

    const hexaClick = () => {
        const newArray = currentHexa.filter((value) => {
            return value != index
        })
        setCurrentHexa(newArray)
        if (isHighlight){
            setIsCorrect(1)
            setScore(score + 1)
            playAudio()
        }else{
            setIsCorrect(-1)
            // console.log("Wrong")
        }
        setIsHighlight(false)

    }

    // "50 1 93 25 93 75 50 99 8 75 8 25" => hexagon points
    return (
        <svg className={styles.svg} height={100/multiplier} width={100/multiplier}>
            <polygon ref={polygonRef} className={styles.poly} id={`hexa${index}`} onClick={() => hexaClick()}
             points={
                 `${50/multiplier}
                    ${1/multiplier}
                    ${93/multiplier} 
                    ${25/multiplier} 
                    ${93/multiplier} 
                    ${75/multiplier} 
                    ${50/multiplier} 
                    ${99/multiplier} 
                    ${8/multiplier}
                    ${75/multiplier} 
                    ${8/multiplier}
                    ${25/multiplier}
                 `
             }
              fill={(!isHighlight)? "#111" : (isCorrect == 0)? "#f4b301" : (isCorrect == -1)? "red" : "limegreen"}>
                
            </polygon>
       </svg>
    )
}

export default Hexagon