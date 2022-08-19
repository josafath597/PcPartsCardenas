import { useContext, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import PropTypes from 'prop-types';

import { Autocomplete, Box, Button, CircularProgress, Dialog, DialogActions, DialogTitle, Grid, TextField } from '@mui/material';
import { CartContext } from "../../Context/CartContext";
import { AuthContext } from "../../Context/AuthContext";
import { useForm } from "react-hook-form";


    const SimpleDialog = ({ onClose, open, id}) => {

    const {removeAllItemCart} = useContext(CartContext);
    
    const navigate = useNavigate();
    
    const handleReturn = () => {
      navigate(-2);
  }
  
    const handleClose = () => {
      handleReturn();
      onClose();
      removeAllItemCart();
    };
  
  
    return (
      <Dialog onClose={handleClose} open={open}>
        {
            id === undefined ? 
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
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };




export const ShopDialog = () => {

    const {user} = useContext(AuthContext);
    const {id, startUploadProducts} = useContext(CartContext);
    
    const [open, setOpen] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleClickOpen = async ({address, phoneNumber}) => {
        setOpen(true);
        startUploadProducts(user, address, phoneNumber);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


  return (
    user.displayName === undefined ? 
    
    <Button variant="contained" sx={{bgcolor:'secondary.main', mt:2 }} component={ RouterLink } to={`/auth/login`}>Registrate primero o Inicia sesion</Button>

    :

    <Box sx={{ width: '100%'}}>

      <form onSubmit={handleSubmit(handleClickOpen)}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%'}}>

          <Grid container>
              
              <Grid item xs={12} md={8} sx={{mt:2 }}>

                  <TextField
                  error= {errors.address?.message === undefined ? false : true} 
                  helperText={errors.address?.message} 
                  label="Direccion" 
                  type="text" 
                  placeholder="Ejemplo: Los Angeles, CA 90210 USA" 
                  fullWidth
                  autoComplete="off" 
                  {
                      ...register('address', {
                      required: {
                      value: true,
                      message: 'Por favor ingrese su direccion'
                      },
                      minLength: {
                      value: 5,
                      message: 'La direccion debe tener al menos 5 caracteres',
                      
                      }
                      
                  })}
                  />

              </Grid>
              
              <Grid item xs={12} md={3} sx={{mt:2, ml:{ xs:0 , md:3}}}>

                      <TextField 
                          error= {errors.phoneNumber?.message === undefined ? false : true}
                          helperText={errors.phoneNumber?.message} 
                          label="Telefono" 
                          type="text" 
                          placeholder="Telefono" 
                          fullWidth
                          autoComplete="off" 

                          {
                          ...register('phoneNumber', {
                          required: {
                              value: true,
                              message:
                              'Por favor ingrese su numero',
                          },
                          pattern: { /*Asegurarnos que es un numero el que se ingresa*/
                              value: /^[0-9]+$/,
                              message: 'Eso no es un numero',
                          },
                          minLength: { /*Asegurar el tamaño del numero*/
                              value: 10,
                              message: 'EL numero es demasiado corto',
                          }
                          
                          })}
                      />



              </Grid>

          </Grid>
        </Box>

        <Button variant="contained" type="submit" sx={{bgcolor:'secondary.main', mt:2, mb: 5 }}>Continuar con tu Compra</Button>

      </form>

        <SimpleDialog
                open={open}
                onClose={handleClose}
                id={id}
        />
    </Box>
  )
}
