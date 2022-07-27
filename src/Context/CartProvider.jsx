import { useState } from "react";
import { CartContext } from "./CartContext"


export const CartProvider = ({children}) => {
    
    const [ItemCart, setItemCart] = useState([]);

    const AddItemCart = (item) => {
      const found = ItemCart.find(i => i.id === item.id);
      if (found === undefined) {
        setItemCart([...ItemCart, item]);
      }
      else {
        const newArray = ItemCart.map(obj => {
          if (obj.id === item.id) {
            return  { ...obj, quantity: obj.quantity + item.quantity };
          }
          return obj;
        })
        
        setItemCart(newArray);
      }
    };

    const RemoveAllItemCart = () => {
      setItemCart([]);
    }

    const RemoveItemCart = (id) => {
      const newArray = ItemCart.filter(obj => obj.id !== id);
      setItemCart(newArray);
    }

    const TotalCart = () => {
      let total = 0;
      if (ItemCart.length > 0) {
        ItemCart.forEach(item => {
          total += item.cost * item.quantity;
        });
      }
      return total;
    }

    const ItemCartLength = () => {
      let Length = 0;
      if (ItemCart.length > 0){
        ItemCart.forEach(item => {
          Length += item.quantity;
        });
      }
      return Length;
    };

    

    


    return (
      <CartContext.Provider value= {{ ItemCart, AddItemCart, RemoveAllItemCart, RemoveItemCart, TotalCart, ItemCartLength  }}>
          {children}
      </CartContext.Provider>
  )
}
