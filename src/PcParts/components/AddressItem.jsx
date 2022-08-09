import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form"

import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { ShopDialog } from './ShopDialog';
import { buyingCartItems } from '../../store/Cart/thunks';

export const AddressItem = () => {

    const dispatch = useDispatch();

    const {id} = useSelector( state => state.cart);
    const {phoneNumber} = useSelector( state => state.auth );
    
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    
    
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        setOpen(true);
        if(id === null) {
            dispatch(buyingCartItems(data.address, data.phoneNumber));
        }
    }

  return (
    <Box>
        
        <Typography variant="h4" sx={{mt: '1rem' }} >Informacion de envio</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>

            <Grid container>
                
            
                <Grid item xs={8} sx={{mt:2}}>

                    <TextField
                    error= {errors.address?.message === undefined ? false : true} 
                    helperText={errors.address?.message} 
                    label="Direccion" 
                    type="text" 
                    placeholder="Ejemplo: Los Angeles, CA 90210 USA" 
                    fullWidth
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
                
                <Grid item xs={3} sx={{mt:2, ml:2}}>

                    {
                        phoneNumber === '' && 

                        <TextField 
                            error= {errors.phoneNumber?.message === undefined ? false : true}
                            helperText={errors.phoneNumber?.message} 
                            label="Telefono" 
                            type="text" 
                            placeholder="Telefono" 
                            fullWidth
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

                    }


                </Grid>

            </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', mb:'2rem'}}>

            <Button variant="contained" type="submit" sx={{bgcolor:'secondary.main', m:2 }}>Continuar con tu Compra</Button>
            <ShopDialog
                    open={open}
                    onClose={handleClose}
            />


        </Box>

        </form>




    </Box>
  )
}
