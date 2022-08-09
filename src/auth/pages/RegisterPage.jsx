import { useMemo } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'

import { AuthLayout } from '../layout/AuthLayout'
import { startCreateUserWithEmailPassword } from "../../store/auth"


export const RegisterPage = () => {

  const dispatch = useDispatch();

  const {status, errorMessage} = useSelector(state => state.auth);

  const isCheckingAuthentication = useMemo ( () => status === 'checking', [status]);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    dispatch(startCreateUserWithEmailPassword(data));
  }


  return (
    <AuthLayout title='Crear una cuenta'>
      <form onSubmit={handleSubmit(onSubmit)} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>

        <Grid item xs={12} sx={{mt:2}}>

          <TextField
            error= {errors.displayName?.message === undefined ? false : true}
            helperText={errors.displayName?.message}
            label="Nombre" 
            type="text" 
            placeholder="Nombre" 
            fullWidth
            {...register("displayName",
              {
                required:{
                  value: true,
                  message: "Por favor ingrese su nombre"
                },
                maxLength: {
                  value: 40,
                  message: "El nombre es demasiado largo"
                }
              }
            )}
              />

        </Grid>

        <Grid item xs={12} sx={{mt:2}}>

          <TextField 
            error= {errors.email?.message === undefined ? false : true}
            helperText={errors.email?.message}
            label="Email" 
            type="text" 
            placeholder="Email" 
            fullWidth
            {
              ...register("email", {
              required: {
                value: true,
                message: "Por favor ingrese su email",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Por favor ingrese un email valido",
              },
            })}
              />

        </Grid>

        <Grid item xs={12} sx={{mt:2}}>

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

        </Grid>

        <Grid item xs={12} sx={{mt:2}}>

          <TextField
            error= {errors.photoURL?.message === undefined ? false : true} 
            helperText={errors.photoURL?.message} 
            label="URL de la foto de perfil" 
            type="text" 
            placeholder="Ejemplo: https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
            fullWidth
            {
              ...register('photoURL', {
              required: {
                value: false,
              },
              minLength: {
                value: 5,
                message: 'La url es demasiado corta',
              }
              
            })}
              />

        </Grid>

        <Grid item xs={12} sx={{mt:2}}>

          <TextField 
            error= {errors.password?.message === undefined ? false : true}
            helperText={errors.password?.message} 
            label="Password" 
            type="password" 
            placeholder="Password" 
            fullWidth
            {
              ...register("password", 
              {
                required: {
                  value: true,
                  message: "Por favor ingrese su password",
                },
                minLength: {
                  value: 6,
                  message: "La contraseña es al menos de 6 caracteres",
                }
            })}
              />

        </Grid>
        
        

      </Grid>
      <Grid container spacing={2} sx={{ mb:2, mt:1 }}>

      
        <Grid item xs={12}
          display= { !!errorMessage ? 'block' : 'none' }
        >
          <Alert severity="error">
            {errorMessage}
          </Alert>
        </Grid>
        

        <Grid item xs={12}>
          <Button
            disabled={isCheckingAuthentication} 
            variant='contained' 
            fullWidth 
            type="submit" 
            >
            Crear cuenta
          </Button>
        </Grid>
        
        

      </Grid>

      <Grid container direction='row' justifyContent='end'>
        <Typography > Ya tienes cuenta? </Typography>
        <Link component={ RouterLink } color='inherit' to='/auth/login' sx={{ ml:1 }}>
          Iniciar Sesión
        </Link>
      </Grid>

      </form>
    </AuthLayout>
  )
}
