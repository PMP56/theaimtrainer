import type { NextPage } from 'next'
import { CSSProperties } from 'react';
import styles from "../../styles/Home.module.css"

interface Props{
    top: number,
    left: number,
    direction: string
}

const MovingGradient: NextPage<Props> = (props) => {
    return(
        <div 
            className={(props.direction == 'x')? styles.movingGradient : styles.movingGradient2} 
            style={{
                "--speed": (props.direction == 'x')? `${(Math.random() * 5) + 25}s` : `${(Math.random() * 5) + 15}s`,
                "left": `${props.left}px`,
                "top": (props.direction == 'x') ? `${props.top}px` : '0px'
            } as CSSProperties}
        >
        </div>
    )
}

export default MovingGradient;