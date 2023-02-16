import React from 'react'
import { useState } from 'react'
import GlobalContext from './GlobalContext'

const GlobalProvider = ({children}) => {

    //contador

    const [countCart , setcountCart] =useState (0)
    const [carrito, setCarrito] =useState ([])

return (
    <div>
    <GlobalContext.Provider value={{countCart , setcountCart, carrito, setCarrito}} >
        {children}
    </GlobalContext.Provider>
    </div>
)
}

export default GlobalProvider;