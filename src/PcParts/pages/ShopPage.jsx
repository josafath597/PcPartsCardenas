
import { Box, Button, Container, Typography } from "@mui/material";
import { CartItem } from "../components/CartItem";

import ProductValue from '../../assets/carro.png';
import { ShopDialog } from "../components/ShopDialog";


export const ShopPage = () => {

  const ItemCart = [1,2];


  // const StartUploadProducts = async () => {

  //   const products = ItemCart.map(item => ({
  //     name: item.name,
  //     id: item.id,
  //     price: item.price,
  //   })
  //   );

  //   const order = {
  //     buyer: {
  //       name: user.displayName,
  //       email: user.email,
  //       uid: user.uid,
  //     },
  //     items: products,
  //     date: new Date(),
  //     total: total
  //   }

  //   const newDoc = doc(collection(FirebaseDB, `orders`));
  //   await setDoc(newDoc, order );

  //   ItemCart.map(async (item) => {
  //     const UpdateRef = doc(FirebaseDB, `${item.category}/${item.id}` )
  //     await updateDoc(UpdateRef, {
  //       stock: item.stock - item.quantity
  //     })
  //   });
    
  //   return newDoc.id;   
  // }

  const state = true;

  return (
     state ?

      <Container className="animate__animated animate__fadeIn animate__faster">
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography sx={{ color: 'primary.main', mt:3 }} variant="h2" >Carrito de Compras</Typography>
          <Typography variant="h4" sx={{ color: 'primary.main', mt:3}}>{`Tienes ${0} producto(s) en tu carrito`} </Typography>
          {
            ItemCart.map(( item ) => (
              <CartItem key={item} />
            ))
          }
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '95%'}}>
          <Typography variant="h5"> Su Total a Pagar es : 1000 USD </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
            <Button variant="contained" sx={{bgcolor:'secondary.main', m:2 }}>Borrar Todo</Button>
            <ShopDialog/>
            
          </Box>
        </Box>

      </Container>
    

    :

    <Box className="animate__animated animate__fadeIn animate__faster">
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
