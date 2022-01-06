import React, { createContext, useContext, useState } from "react";

interface Grid{
    [key: number]: Array<number>
}

interface Value{
    multiplier: number,
    setMultiplier: Function,
    gridSize: Grid,
    currentHexa: Array<any>,
    setCurrentHexa: Function,
    score: number,
    setScore: Function,
    spawnTime: number,
    setSpawnTime: Function,
    lifeTime: number,
    setLifeTime: Function,
    difficulty: number,
    setDifficulty: Function,
    pause: boolean,
    setPause: Function
}

const gridSize: {[key: number]: Array<number>} = {
    1: [20, 12],
    1.1: [22, 13],
    1.2: [24, 14],
    1.3: [26, 16],
    1.4: [28, 17],
    1.5: [30, 18],
    1.6: [32, 19],
    1.7: [34, 21],
    1.8: [36, 22],
    1.9: [38, 23],
    2: [40, 24],
    2.1: [42, 26],
    2.2: [44, 27],
    2.3: [46, 28],
    2.4: [48, 29],
    2.5: [49, 31]
}

const exampleValue: Value = {
    multiplier: 1.4,
    setMultiplier: () => {},
    gridSize: gridSize,
    currentHexa: [],
    setCurrentHexa: () => {},
    score: 0,
    setScore: () => {},
    spawnTime: 2000,
    setSpawnTime: () => {},
    lifeTime: 2000,
    setLifeTime: () => {},
    difficulty: 1,
    setDifficulty: () => {},
    pause: false,
    setPause: () => {}
}

export const GlobalContext = createContext<Value>(exampleValue);

export const GlobalProvider:React.FC = ({children}) => {
    const [multiplier, setMultiplier] = useState(1.4);
    const [difficulty, setDifficulty] = useState(1);
    const [spawnTime, setSpawnTime] = useState(2000);
    const [lifeTime, setLifeTime] = useState(2000);
    const [score, setScore] = useState(0);

    const [currentHexa, setCurrentHexa] = useState([])
    const [pause, setPause] = useState(false)
    

    const globalValue: Value = {
        multiplier: multiplier,
        setMultiplier: setMultiplier,
        gridSize: gridSize,
        currentHexa: currentHexa,
        setCurrentHexa: setCurrentHexa,
        score: score,
        setScore: setScore,
        spawnTime: spawnTime,
        setSpawnTime: setSpawnTime,
        lifeTime: lifeTime,
        setLifeTime: setLifeTime,
        difficulty: difficulty,
        setDifficulty: setDifficulty,
        pause: pause,
        setPause: setPause
    }

    return (
        <GlobalContext.Provider value={globalValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;