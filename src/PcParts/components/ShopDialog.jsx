import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { clearBuy } from "../../store/Cart/CartSlice";

export const ShopDialog = ({ onClose, open }) => {

  const {id} = useSelector( state => state.cart );

  const dispatch = useDispatch();

  const navigate = useNavigate();
    
  const handleReturn = () => {
    navigate(-2);
  }
  
  const handleClose = () => {
    dispatch( clearBuy());
    handleReturn();
    onClose();
  };
  
  
    return (
      <Dialog onClose={handleClose} open={open} className="animate__animated animate__fadeIn animate__faster">
        
        {
            id === null ? 
            <Box sx={{ display: 'flex', width: '10vh', height: '10vh', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress />
            </Box>
            :
            <>
                <DialogTitle textAlign='center'>{`Compra Exitosa tu numero de orden es ${id}, usa este numero de orden para rastrear tu pedido, tu pedido es enviado al siguiente dia habil despues de la compra`}</DialogTitle>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose} autoFocus>
                        Volver a la tienda
                    </Button>
                </DialogActions>
            </>
        }
        
    </Dialog>
    );
  
  }
  
  ShopDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };
