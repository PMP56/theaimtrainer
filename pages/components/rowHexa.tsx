import type { NextPage } from "next";
import { Fragment, useContext, useEffect } from "react";
import styles from '../../styles/RowHexa.module.css'
import { GlobalContext } from "../contexts/GlobalContext";
import Hexagon from "./hexagon";

interface Props{
    index: number,
    playAudio: Function
}

const RowHexa: NextPage<Props> = (props) => {
    const {multiplier, gridSize} = useContext(GlobalContext);
    const [col, row] = gridSize[multiplier]
    
    const list = Array.from({length: col }, (_, index) => <Hexagon playAudio = {props.playAudio} index={(index < col)? props.index * col + index : 10000} />)

    const {index} = props
    
    return(
        <div className={styles.row} style={{
            top: `${-index * 22 / multiplier}px`,
            gridTemplateColumns: `repeat(50, minmax(${90/multiplier}px, 1fr))`,
            left: (index % 2 == 0) ? '0px': `${45/multiplier}px`,
        }}>
            {list.map((result, index) => <Fragment key={index}>{result}</Fragment>)}
        </div>
    )
}

export default RowHexa