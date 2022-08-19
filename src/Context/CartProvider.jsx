import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { FirebaseDB } from "../firebase/config";
import { CartContext } from "./CartContext"


export const CartProvider = ({children}) => {
    
    const [itemCart, setItemCart] = useState([]);
    const [id, setId] = useState('');

    const addItemCart = (item) => { 
      const found = itemCart.find(i => i.id === item.id);
      if (found === undefined) {
        setItemCart([...itemCart, item]);
        return;
      }

      if (found !== undefined) {
        const newArray = itemCart.map(obj => {

          if (obj.id === item.id) return  { ...obj, quantity: obj.quantity + item.quantity };
          return obj;
        })
        
        setItemCart(newArray);
        return;
      }
    };

    const removeAllItemCart = () => {
      setId(undefined);
      setItemCart([]); 
    }

    const removeItemCart = (id) => {
      const newArray = itemCart.filter(obj => obj.id !== id);
      setItemCart(newArray);
    }

    const totalCart = () => {
      let total = 0;
      if (itemCart.length > 0) {
        itemCart.forEach(item => {
          total += item.cost * item.quantity;
        });
      }
      return total;
    }

    const itemCartLength = () => {
      let Length = 0;
      if (itemCart.length > 0){
        itemCart.forEach(item => {
          Length += item.quantity;
        });
      }
      return Length;
    };

    const updateStock = () => {
      itemCart.map(async (item) => {
        const UpdateRef = doc(FirebaseDB, `${item.category}/${item.id}` )
        await updateDoc(UpdateRef, {
          stock: item.stock - item.quantity
        })
      });
    }


    
    const startUploadProducts = async ( user, address, phoneNumber ) => {
      
      const products = itemCart.map(item => ({
        name: item.name,
        id: item.id,
        price: item.price,
      })
      );
      
      const newDoc = doc(collection(FirebaseDB, `orders`));
      await setDoc(newDoc, {
        buyer: {
          name: user.displayName,
          email: user.email? user.email : '',
          uid: user.uid,
          address,
          phoneNumber
        },
        items: products,
        date: new Date(),
        total: totalCart()
      });

      updateStock();
      setId(newDoc.id); 
  
    }


    return (
      <CartContext.Provider value= {{ itemCart, addItemCart, removeAllItemCart, removeItemCart, totalCart, itemCartLength, startUploadProducts, id, setId  }}>
          {children}
      </CartContext.Provider>
  )
}
