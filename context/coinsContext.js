import React, {createContext, useState } from 'react'

export const CoinsContext = createContext()

export const CoinsProvider = ({children}) => {
    const [coins, setCoins] = useState(0);

    const addCoins = (newCoins) => {
        setCoins(coins + newCoins)
    }

    const removeCoins = (coinsToRemove) => {
        
        setCoins(coins - coinsToRemove)
    }
    return (
        <CoinsContext.Provider value={{coins, addCoins, removeCoins}}>
            {children}
        </CoinsContext.Provider>
    )
}