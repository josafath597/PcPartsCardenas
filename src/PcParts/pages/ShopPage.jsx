import { useContext } from "react";

import { Box, Button, Container, Typography } from "@mui/material";
import { CartItem } from "../components/CartItem";

import ProductValue from '../../assets/carro.png';
import { CartContext } from "../../Context/CartContext";
import { ShopDialog } from "../components/ShopDialog";
import { AuthContext } from "../../Context/AuthContext";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";


export const ShopPage = () => {

  const {ItemCart, RemoveAllItemCart, TotalCart} = useContext(CartContext);
  const total = TotalCart();

  const {user} = useContext(AuthContext);

  const StartUploadProducts = async () => {

    const products = ItemCart.map(item => ({
      name: item.name,
      id: item.id,
      price: item.price,
    })
    );

    const newDoc = doc(collection(FirebaseDB, `orders`));
    const setDocResp = await setDoc(newDoc, {
      buyer: {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
      },
      items: products,
      date: new Date(),
      total: total
    });

    const setUpdateDoc =  ItemCart.map(async (item) => {
      const UpdateRef = doc(FirebaseDB, `${item.category}/${item.id}` )
      await updateDoc(UpdateRef, {
        stock: item.stock - item.quantity
      })
    });
    console.log(newDoc);
    return newDoc.id;   
  }

  return (
     ItemCart.length > 0 ?

      <Container>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography sx={{ color: 'primary.main', mt:3 }} variant="h2" >Carrito de Compras</Typography>
          <Typography variant="h4" sx={{ color: 'primary.main', mt:3}}>{`Tienes ${ItemCart.length} producto(s) en tu carrito`} </Typography>
          {
            ItemCart.map(( item ) => (
              <CartItem key={item.id} {...item}/>
            ))
          }
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '95%'}}>
          <Typography variant="h5" sx={{}}> Su Total a Pagar es : {total} USD </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
            <Button variant="contained" sx={{bgcolor:'secondary.main', m:2 }} onClick={RemoveAllItemCart}>Borrar Todo</Button>
            <ShopDialog StartUploadProducts={StartUploadProducts} />
            
          </Box>
        </Box>

      </Container>
    

    :

    <Box>
      <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '60vh'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <Box
                    component="img"
                    src={ProductValue}
                    alt="suitcase"
                    sx={{ height: 150 }}
                  />
          <Typography sx={{ color: 'primary.main', mt:3 }} variant="h5">
            Hola, no tienes ningun producto en tu carrito
          </Typography>
          
        </Box>
      </Container>
    </Box>
  );
}
