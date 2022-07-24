import { useState } from "react";
import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {

    const [Counter, setCounter] = useState(1);

    return (
      <CartContext.Provider value= {{ Counter, setCounter }}>
          {children}
      </CartContext.Provider>
  )
}
