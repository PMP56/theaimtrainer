import type { NextPage } from "next";
import { useContext } from "react";
import styles from '../../styles/Hexagon.module.css';
import { GlobalContext } from "../contexts/GlobalContext";

interface Props{
    index: number | string
}

const Hexagon: NextPage<Props> = (props) => {
    const {multiplier, score, setScore} = useContext(GlobalContext)
    const { index } = props

    const hexaClick = (e: {target: HTMLInputElement}) => {
        // if (currentHexa.length != 0) console.log(e.target in currentHexa)
        // console.log(e.target?.style.fill == "yellow")
        if (e.target?.style.fill == "rgb(252, 152, 22)"){
            setTimeout(() => {
                e.target.style.fill = "#111"
            }, 1000)
            e.target.style.fill = "limegreen";
            setScore(score + 1)
            // e.target?.style.transitionDuration = "0s"
            // console.log("Press")
        }else{
            setTimeout(() => {
                e.target.style.fill = "#111"
            }, 1000)
            e.target.style.fill = "red";
            setScore(score - 1)
        }
    }
    // "50 1 93 25 93 75 50 99 8 75 8 25" => hexagon points
    return (
        <svg className={styles.svg} height={100/multiplier} width={100/multiplier}>
            <polygon className={styles.poly} id={`hexa${index}`} onClick={(e) => hexaClick(e)}
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
              fill="#111">
                
            </polygon>
       </svg>
    )
}

export default Hexagon