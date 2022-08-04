import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { AuthContext } from "../../Context/AuthContext";


    const SimpleDialog = ({ onClose, open, order }) => {

    const {RemoveAllItemCart} = useContext(CartContext);
    

    const navigate = useNavigate();
    
    const handleReturn = () => {
      navigate(-1);
  }
  
    const handleClose = () => {
      handleReturn();
      onClose();
      RemoveAllItemCart();
    };
  
  
    return (
      <Dialog onClose={handleClose} open={open}>
        {
            order === undefined ? 
            <Box sx={{ display: 'flex', width: '10vh', height: '10vh', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress />
            </Box>
            :
            <>
                <DialogTitle textAlign='center'>{`Compra Exitosa tu numero de orden es ${order}, usa este numero de orden para rastrear tu pedido, tu pedido es enviado al siguiente dia habil despues de la compra`}</DialogTitle>
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
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };




export const ShopDialog = ({StartUploadProducts}) => {

    const {user} = useContext(AuthContext);
    
    const [open, setOpen] = useState(false);

    const [order, setOrder] = useState();

    const handleClickOpen = async () => {
        setOpen(true);
        const id = await StartUploadProducts();
        setOrder(id);
        
      };
    
      const handleClose = () => {
        setOpen(false);
      };


  return (
    user.displayName === undefined ? 
    
    <Button variant="contained" sx={{bgcolor:'secondary.main', m:2 }} component={ RouterLink } to={`/auth/login`}>Registrate primero o Inicia sesion</Button>

    :
    <>
        <Button variant="contained" onClick={handleClickOpen} sx={{bgcolor:'secondary.main', m:2 }}>Continuar con tu Compra</Button>
        <SimpleDialog
                open={open}
                onClose={handleClose}
                order={order}
        />
    </>
  )
}
