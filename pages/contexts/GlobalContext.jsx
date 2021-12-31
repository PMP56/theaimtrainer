import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [multiplier, setMultiplier] = useState(1.2);
    const [difficulty, setDifficulty] = useState(1);
    const [spawnTime, setSpawnTime] = useState(2000);
    const [lifeTime, setLifeTime] = useState(2000);
    const [score, setScore] = useState(0);

    const gridSize = {
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

    const [currentHexa, setCurrentHexa] = useState([])
    
    return (
        <GlobalContext.Provider value={{
            multiplier, 
            setMultiplier, 
            gridSize, 
            currentHexa, 
            setCurrentHexa,
            score,
            setScore,
            spawnTime,
            setSpawnTime,
            lifeTime,
            setLifeTime,
            difficulty,
            setDifficulty
        }}>
            {children}
        </GlobalContext.Provider>
    )
}