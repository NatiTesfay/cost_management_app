import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import {getAllProducts} from '../service/products-rest'

export const productsContext = createContext()

export default function ProductsProvider({children}) {
  const [products, setProducts] = useState([])
  useEffect(()=>{getAllProducts().then((res)=>setProducts(res?.products))},[])

  return (
    <productsContext.Provider value={{products, setProducts}}>
        {children}
    </productsContext.Provider>
  )
}