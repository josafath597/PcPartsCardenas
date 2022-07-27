import { useContext, useState } from 'react';
import { Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { SimpleDialog } from './SimpleDialog';
import { CartContext } from '../../Context/CartContext';


export const OpenDialog = (props) => {

  const {setCounter} = props;

  const {AddItemCart} = useContext(CartContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setCounter(1);
    AddItemCart(props);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <Button variant="contained" onClick={handleClickOpen} sx={{bgcolor:'secondary.main'}}>Añadir al Carrito <ShoppingCartIcon sx={{ml: 1}}/> </Button>
        <SimpleDialog
            open={open}
            onClose={handleClose}
        />
    </>
  );
}

