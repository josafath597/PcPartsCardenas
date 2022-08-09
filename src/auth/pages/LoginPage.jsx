import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'

import { AuthLayout } from '../layout/AuthLayout'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'



export const LoginPage = () => {

  const {status, errorMessage} = useSelector(state => state.auth);
  
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = async (data) => {

    dispatch(startLoginWithEmailPassword(data))
    
  }

  const onGoogleSignIn =  () => {
    dispatch(startGoogleSignIn())
  }


  return (
    <AuthLayout title="Iniciar Sesion">

      <form action="" onSubmit={handleSubmit(onSubmit)} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>

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

          <Grid item xs={12} sx={{ mt:2 }}>

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

          <Grid container spacing={2} sx={{ mb:2, mt:1 }} >

            <Grid item xs={12}
              display= { !!errorMessage ? 'block' : 'none' }
            >
              <Alert severity="error">
                {errorMessage}
              </Alert>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button type="submit" variant='contained' fullWidth disabled={ isAuthenticating } >
                Iniciar Sesión
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Button
                  disabled={ isAuthenticating }  
                  variant='contained' 
                  fullWidth
                  onClick={onGoogleSignIn}

                >
                  <Google />
                  <Typography sx={{ ml:1 }} >
                    Iniciar Sesión con Google
                  </Typography>
                </Button>
            </Grid>


          </Grid>
            
            <Grid container direction='row' justifyContent='end' display={ isAuthenticating && 'none'}>
              <span>No tienes cuenta?</span>
              <Link component={ RouterLink } color='inherit' to='/auth/register' sx={{ ml:1 }} disabled={false}>
                Registrate
              </Link>
            </Grid>
          

          

        </Grid>
      </form>
    </AuthLayout>
  )
}
