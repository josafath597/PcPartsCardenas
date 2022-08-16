import { useContext, useEffect } from "react"
import { Link as RouterLink, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"


import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'

import { AuthLayout } from '../layout/AuthLayout'
import { AuthContext } from "../../Context/AuthContext"

export const RegisterPage = () => {

  const {Auth, error, registerUser} = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {

    if(Auth){
      navigate('/home');
    }

  }, [Auth])

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    await registerUser(data);
  }


  return (
    <AuthLayout title='Crear una cuenta'>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>

        <Grid item xs={12} sx={{mt:2}}>

          <TextField
            error= {errors.name?.message === undefined ? false : true}
            helperText={errors.name?.message}
            label="Nombre" 
            type="text" 
            placeholder="Nombre" 
            fullWidth
            {...register("name",
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

        <Grid item xs={12}>
          <Button 
            variant='contained' 
            fullWidth 
            type="submit" 
            >
            Crear cuenta
          </Button>
        </Grid>
        
        {
          error && <Grid item xs={12}>
          <Alert severity="error">
            {error}
          </Alert>
        </Grid>
        }

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
