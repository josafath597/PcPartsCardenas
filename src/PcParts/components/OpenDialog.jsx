import { useState } from 'react';
import { Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { SimpleDialog } from './SimpleDialog';



export const OpenDialog = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <Button variant="contained" disabled={false} onClick={handleClickOpen} sx={{bgcolor:'secondary.main'}}>Añadir al Carrito <ShoppingCartIcon sx={{ml: 1}}/> </Button>
        <SimpleDialog
            open={open}
            onClose={handleClose}
        />
    </>
  );
}

