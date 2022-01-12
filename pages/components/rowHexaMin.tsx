import type { NextPage } from "next";
import { Fragment, useContext, useEffect } from "react";
import styles from '../../styles/RowHexa.module.css'
import { GlobalContext } from "../contexts/GlobalContext";
import Hexagon from "./hexagon";
import HexagonMin from "./hexagonMin";

interface Props{
    index: number,
    count: number,
    left: number,
    color: string,
    multiplier: number
}

const RowHexaMin: NextPage<Props> = (props) => {
    const multiplier = props.multiplier
    const list = Array.from({length: props.count }, (_, index) => <HexagonMin color={props.color} index={props.index} multiplier={multiplier}/>)

    const {index} = props
    
    
    return(
        <div className={styles.row} style={{
            top: `${-index * 22 / multiplier}px`,
            gridTemplateColumns: `repeat(50, minmax(${90/multiplier}px, 1fr))`,
            left: (index % 2 == 0) ? `${props.left}px`: `${props.left + 45/multiplier}px`,
        }}>
            {list.map((result, index) => <Fragment key={index}>{result}</Fragment>)}
        </div>
    )
}

export default RowHexaMin