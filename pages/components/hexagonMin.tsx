import type { NextPage } from "next";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from '../../styles/Hexagon.module.css';
import { GlobalContext } from "../contexts/GlobalContext";


interface Props{
    index: number,
    multiplier: number,
    color: string
}

const HexagonMin: NextPage<Props> = (props) => {

    const { index, multiplier } = props

    // "50 1 93 25 93 75 50 99 8 75 8 25" => hexagon points
    return (
        <svg className={styles.svg} height={100/multiplier} width={100/multiplier}>
            <polygon className={styles.poly} id={`hexa${index}`}
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
              fill={props.color}>
                
            </polygon>
       </svg>
    )
}

export default HexagonMin