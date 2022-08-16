import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { FirebaseDB } from "../firebase/config";
import { CartContext } from "./CartContext"


export const CartProvider = ({children}) => {
    
    const [ItemCart, setItemCart] = useState([]);
    const [id, setId] = useState('');

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

    const StartUploadProducts = async ( user, address, phoneNumber ) => {


      const products = ItemCart.map(item => ({
        name: item.name,
        id: item.id,
        price: item.price,
      })
      );

  
      const newDoc = doc(collection(FirebaseDB, `orders`));
      await setDoc(newDoc, {
        buyer: {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          address,
          phoneNumber
        },
        items: products,
        date: new Date(),
        total: TotalCart()
      });
  
      ItemCart.map(async (item) => {
        const UpdateRef = doc(FirebaseDB, `${item.category}/${item.id}` )
        await updateDoc(UpdateRef, {
          stock: item.stock - item.quantity
        })
      });
      setId(newDoc.id); 
    }


    return (
      <CartContext.Provider value= {{ ItemCart, AddItemCart, RemoveAllItemCart, RemoveItemCart, TotalCart, ItemCartLength, StartUploadProducts, id  }}>
          {children}
      </CartContext.Provider>
  )
}
