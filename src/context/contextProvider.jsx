import React from 'react'
import UseProductContext from './useProductContext'
import { useState } from 'react'

export default function ContextProvider({children}) {
    
const [product, setproduct] = useState("")

console.log(product);

    return (
        <UseProductContext.Provider value={{product,setproduct}}>
            {children}
        </UseProductContext.Provider>
    )
}
