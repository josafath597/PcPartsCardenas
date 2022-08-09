import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from "react-router-dom"

import { Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { SimpleDialog } from './SimpleDialog'; 
import { addNewCartItem } from '../../store/Cart/CartSlice';



export const OpenDialog = (props) => {

  const {id, name, cost, quantity, stock, image, category} = props;

  const dispatch = useDispatch();
  
  const {status} = useSelector( state => state.auth);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    dispatch( addNewCartItem({ id, name, cost, quantity, stock, image, category}) )
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    status === 'not-authenticated' 
    ? <Button variant="contained" sx={{bgcolor:'secondary.main'}} component={ RouterLink } to={`/auth/login`} >Antes de comprar regístrate o inicia sesión </Button>
    :
    <>
        <Button variant="contained" disabled={stock === 0 ? true : false} onClick={handleClickOpen} sx={{bgcolor:'secondary.main'}}>Añadir al Carrito <ShoppingCartIcon sx={{ml: 1}}/> </Button>
        <SimpleDialog
            open={open}
            onClose={handleClose}
        />
    </>
  );
}

