import React, { useContext, useEffect } from 'react'
import { Link as RouterLink, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'

import { AuthLayout } from '../layout/AuthLayout'
import { AuthContext } from '../../Context/AuthContext'


export const LoginPage = () => {

  const {error , isAuthenticating, isAuthenticated, startGoogleSignIn, loginWithEmailPassword} = useContext(AuthContext);

  const navigate = useNavigate();
  
  useEffect(() => {

    if(isAuthenticated){
      navigate(-1);
    }

  }, [isAuthenticated])
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async ({email, password}) => {
    await loginWithEmailPassword(email, password);
  }

  return (
    <AuthLayout title="Iniciar Sesion">

      <form action="" onSubmit={handleSubmit(onSubmit)}>
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

            {
              error && 
              <Grid item xs={12}>
                <Alert severity="error">
                  {error}
                </Alert>
              </Grid>
            }

            <Grid item xs={12} sm={6}>


              <Button type="submit" variant='contained' fullWidth disabled={isAuthenticating} >
                Iniciar Sesión
              </Button>

            </Grid>

            <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}  
                  variant='contained' 
                  fullWidth
                  onClick={startGoogleSignIn}
                >
                  <Google />
                  <Typography sx={{ ml:1 }} >
                    Iniciar Sesión con Google
                  </Typography>
                </Button>
            </Grid>


          </Grid>
          {
            !isAuthenticating
             
            && 
            
            <Grid container direction='row' justifyContent='end' sx={{}}>
              <span>No tienes cuenta?</span>
              <Link component={ RouterLink } color='inherit' to='/auth/register' sx={{ ml:1 }} disabled={isAuthenticating}>
                Registrate
              </Link>
            </Grid>
          }

          

        </Grid>
      </form>
    </AuthLayout>
  )
}
