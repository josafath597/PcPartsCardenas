import { useContext, useState } from 'react';

import { Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { SimpleDialog } from './SimpleDialog';
import { CartContext } from '../../Context/CartContext';


export const OpenDialog = (props) => {

  const {stock}= props;

  const {setCounter} = props;

  const {addItemCart} = useContext(CartContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setCounter(1);
    addItemCart(props);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <Button variant="contained" disabled={stock === 0 ? true : false} onClick={handleClickOpen} sx={{bgcolor:'secondary.main'}}>Añadir al Carrito <ShoppingCartIcon sx={{ml: 1}}/> </Button>
        <SimpleDialog
            open={open}
            onClose={handleClose}
        />
    </>
  );
}

