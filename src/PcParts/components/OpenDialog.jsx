import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PropTypes from 'prop-types';

const SimpleDialog = (props) => {

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };


  return (
    <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Se agrego el producto a tu carrito de compras</DialogTitle>
        <DialogActions>
          <Button variant="outlined" sx={{ mr: 1 }} onClick={handleClose}>Seguir Comprando</Button>
          <Button variant="outlined" component={ RouterLink } to={`/home/shop`} autoFocus>
            Ir al carrito
          </Button>
        </DialogActions>
    </Dialog>
  );

}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


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
        <Button variant="contained" onClick={handleClickOpen} sx={{bgcolor:'secondary.main'}}>Añadir al Carrito <ShoppingCartIcon sx={{ml: 1}}/> </Button>
        <SimpleDialog
            open={open}
            onClose={handleClose}
        />
    </>
  );
}
