import type { NextPage } from "next";
import React, { FC, Fragment, useContext, useEffect, useRef, useState } from "react";
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
              fill={(!isHighlight)? "#111" : (isCorrect == 0)? "white" : (isCorrect == -1)? "red" : "limegreen"}>
            </polygon>
            {(isHighlight)? <svg version="1.0" xmlns="http://www.w3.org/2000/svg" 
                    width="67" viewBox="0 0 1380.000000 1528.000000"
                    preserveAspectRatio="xMidYMid meet"
                    onClick={() => hexaClick()}
                >
                    
                <g transform="translate(0.000000,1528.000000) scale(0.100000,-0.100000)"
                fill="#dc3a45" stroke="none">
                    <path d="M6785 15190 c-262 -30 -537 -121 -878 -291 -184 -92 -266 -135 -377
                    -199 -36 -21 -81 -47 -100 -57 -19 -11 -170 -101 -335 -200 -415 -249 -797
                    -465 -1280 -723 -55 -29 -149 -81 -210 -115 -60 -35 -126 -71 -145 -82 -19
                    -10 -80 -45 -135 -77 -55 -32 -147 -86 -205 -119 -58 -33 -141 -82 -185 -107
                    -44 -26 -100 -59 -125 -72 -53 -30 -408 -234 -430 -247 -8 -5 -100 -59 -205
                    -119 -545 -312 -916 -542 -1145 -707 -231 -167 -441 -372 -558 -545 -51 -77
                    -130 -222 -150 -275 -6 -16 -20 -55 -31 -85 -48 -126 -91 -316 -116 -515 -31
                    -252 -36 -428 -33 -1278 1 -524 -3 -1037 -11 -1332 -16 -581 -10 -2854 8
                    -3080 58 -730 195 -1083 557 -1436 159 -155 277 -247 544 -421 222 -145 351
                    -221 765 -450 55 -31 117 -65 137 -77 21 -11 67 -37 104 -57 37 -20 112 -64
                    168 -97 56 -33 121 -71 146 -85 25 -14 87 -51 138 -84 51 -32 95 -58 98 -58 3
                    0 37 -20 75 -45 38 -25 71 -45 74 -45 2 0 59 -34 127 -77 68 -42 164 -101 213
                    -131 50 -30 101 -63 115 -72 25 -16 214 -127 385 -225 102 -59 429 -247 615
                    -355 69 -40 141 -81 160 -92 19 -11 152 -88 295 -170 432 -250 463 -268 660
                    -375 516 -282 833 -414 1130 -469 150 -28 451 -26 595 5 207 43 423 120 675
                    240 138 66 466 244 564 305 22 15 42 26 45 26 2 0 91 53 199 119 107 65 199
                    120 203 122 5 2 59 34 119 70 126 75 149 89 380 217 94 51 208 115 255 142 47
                    26 119 65 160 88 41 22 100 53 130 69 213 114 708 393 791 446 13 8 40 24 59
                    34 19 10 78 44 130 74 87 51 448 260 530 307 570 325 1074 628 1251 752 201
                    140 312 230 438 353 354 348 491 683 553 1352 10 105 12 341 10 940 -2 560 2
                    994 14 1445 13 519 15 857 11 1735 -4 600 -11 1173 -17 1275 -35 613 -121 940
                    -330 1255 -88 134 -321 372 -475 486 -55 41 -104 78 -110 82 -108 84 -554 357
                    -830 507 -44 24 -105 57 -135 73 -30 17 -102 57 -160 90 -58 32 -125 71 -150
                    84 -25 14 -83 49 -130 77 -47 28 -101 60 -121 71 -56 31 -568 341 -809 490
                    -125 77 -323 193 -605 355 -16 9 -106 61 -200 115 -93 54 -201 116 -240 138
                    -38 22 -101 59 -140 82 -38 23 -90 53 -115 67 -91 51 -266 151 -310 178 -25
                    15 -65 39 -90 52 -25 14 -128 72 -230 130 -659 374 -1002 522 -1349 583 -108
                    19 -323 26 -426 15z m485 -2685 c395 -62 887 -257 1485 -588 50 -27 119 -66
                    155 -85 36 -19 76 -42 90 -51 14 -9 50 -30 80 -45 30 -16 67 -37 82 -48 14
                    -10 29 -18 32 -18 14 0 546 -333 776 -485 211 -140 473 -328 575 -413 242
                    -201 419 -389 555 -592 320 -476 440 -1118 440 -2360 0 -804 -55 -1556 -141
                    -1930 -159 -689 -442 -1079 -1155 -1593 -98 -70 -478 -317 -554 -359 -25 -14
                    -93 -54 -150 -90 -58 -35 -130 -78 -160 -95 -30 -16 -82 -46 -115 -66 -193
                    -113 -863 -461 -1070 -555 -168 -76 -189 -84 -325 -137 -739 -288 -1253 -276
                    -2025 47 -196 82 -664 316 -845 423 -30 18 -75 44 -100 57 -131 72 -242 136
                    -303 175 -37 24 -69 43 -71 43 -22 0 -721 453 -926 600 -824 590 -1119 1090
                    -1219 2065 -61 592 -59 1660 5 2375 69 782 223 1237 549 1625 123 146 363 369
                    530 493 6 4 44 32 85 63 93 70 416 283 570 377 146 89 488 290 560 330 30 16
                    75 41 100 54 350 195 829 435 1061 533 369 155 641 233 924 265 108 12 388 4
                    505 -15z"/>
                    <path d="M6613 10305 c-314 -41 -570 -118 -858 -260 -189 -93 -400 -229 -525
                    -341 -150 -133 -193 -175 -287 -282 -32 -36 -63 -70 -68 -76 -24 -26 -147
                    -198 -199 -278 -63 -99 -157 -283 -209 -408 -266 -651 -259 -1407 20 -2050
                    184 -424 420 -729 818 -1059 186 -154 527 -336 801 -427 683 -226 1474 -156
                    2093 185 79 44 253 151 261 161 3 4 28 21 55 40 28 19 52 36 55 39 3 3 43 38
                    90 78 458 385 781 935 894 1520 39 204 49 342 43 587 -8 300 -43 505 -132 772
                    -151 451 -429 862 -795 1175 -41 35 -77 66 -80 69 -15 17 -187 135 -265 182
                    -338 206 -691 328 -1075 373 -153 18 -495 18 -637 0z m521 -2000 c201 -53 378
                    -230 431 -431 19 -75 19 -233 0 -308 -53 -201 -230 -378 -431 -431 -75 -19
                    -233 -19 -308 0 -201 53 -378 230 -431 431 -19 75 -19 233 0 308 52 199 228
                    377 426 430 73 20 240 20 313 1z"/>
                </g>
            </svg> : <Fragment /> }
       </svg>
    )
}

export default Hexagon