import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, Container, Typography } from "@mui/material";

import { CartItem } from "../components/CartItem";
import ProductValue from '../../assets/carro.png';
import { countCartItems, removeAllCartItems, totalCartItems } from '../../store/Cart/CartSlice';
import { AddressItem } from '../components/AddressItem';


export const ShopPage = () => {
  const dispatch = useDispatch();
  const {items, total, count} = useSelector( state => state.cart );

  useEffect(() => {
    dispatch( totalCartItems() );
    dispatch( countCartItems() );
  }, [items])
  
  return (
   
     count > 0 ?

      <Container className="animate__animated animate__fadeIn animate__faster">
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <Typography sx={{ color: 'primary.main', mt:3 }} variant="h2" >Carrito de Compras</Typography>
          <Typography variant="h4" sx={{ color: 'primary.main', mt:3}}>{`Tienes ${count} producto(s) en tu carrito`} </Typography>
          {
            items.map(( item ) => (
              <CartItem key={item.id} {...item} />
            ))
          }
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '95%'}}>
          <Typography variant="h5"> {`Su Total a Pagar es : ${total}  USD`} </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%'}}>
            <Button variant="contained" onClick={() => dispatch(removeAllCartItems())} sx={{bgcolor:'secondary.main', m:2 }}>Borrar Todo</Button>
            
          </Box>
          </Box>
          <AddressItem />

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
