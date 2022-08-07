import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';

export const SimpleDialog = ({ onClose, open }) => {

    const navigate = useNavigate();
    
    const handleReturn = () => {
      navigate(-1);
  }
  
    const handleClose = () => {
      handleReturn();
      onClose();
    };
  
  
    return (
      <Dialog onClose={handleClose} open={open} className="animate__animated animate__fadeIn animate__faster">
          <DialogTitle>Se agrego el producto a tu carrito de compras</DialogTitle>
          <DialogActions>
            <Button variant="outlined" sx={{ mr: 1 }} onClick={handleClose} autoFocus>Seguir Comprando</Button>
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
  };