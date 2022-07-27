import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Box, Button, Container, Typography } from "@mui/material";
import { CartItem } from "../components/CartItem";

import ProductValue from '../../assets/carro.png';


export const ShopPage = () => {

  const {ItemCart, RemoveAllItemCart, TotalCart} = useContext(CartContext);
  const total = TotalCart();
  console.log(ItemCart);

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
            <Button variant="contained" sx={{bgcolor:'secondary.main', m:2 }}>Continuar con tu Compra</Button>
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
