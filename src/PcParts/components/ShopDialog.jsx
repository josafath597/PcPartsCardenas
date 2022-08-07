import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';

    const SimpleDialog = ({ onClose, open }) => {

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
        {/* {
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
        } */}
        <>
                <DialogTitle textAlign='center'>{`Compra Exitosa tu numero de orden es ${1}, usa este numero de orden para rastrear tu pedido, tu pedido es enviado al siguiente dia habil despues de la compra`}</DialogTitle>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose} autoFocus>
                        Volver a la tienda
                    </Button>
                </DialogActions>
          </>
        
    </Dialog>
    );
  
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };




export const ShopDialog = () => {

    
    const [open, setOpen] = useState(false);

    
    const handleClickOpen = async () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


  return (
    // user.displayName === undefined ? 
    
    // <Button variant="contained" sx={{bgcolor:'secondary.main', m:2 }} component={ RouterLink } to={`/auth/login`}>Registrate primero o Inicia sesion</Button>

    // :
    // <>
    //     <Button variant="contained" onClick={handleClickOpen} sx={{bgcolor:'secondary.main', m:2 }}>Continuar con tu Compra</Button>
    //     <SimpleDialog
    //             open={open}
    //             onClose={handleClose}
    //     />
    // </>
    <>
        <Button variant="contained" onClick={handleClickOpen} sx={{bgcolor:'secondary.main', m:2 }}>Continuar con tu Compra</Button>
        <SimpleDialog
                open={open}
                onClose={handleClose}
        />
    </>
  )
}
