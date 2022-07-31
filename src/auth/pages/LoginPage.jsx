import React, { useContext } from 'react'
import { Link as RouterLink } from "react-router-dom"
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom"
import { AuthLayout } from '../layout/AuthLayout'
import { singInWithGoogle } from '../../firebase/providers'
import { AuthContext } from '../../Context/AuthContext'

export const LoginPage = () => {

  const {setUser} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const navigate = useNavigate();
  
  const startGoogleSignIn = async () => {
    const result = await singInWithGoogle();
    setUser(result);
    if(result.ok) {
      navigate('/home');
    }

  }

  return (
    <AuthLayout title="Iniciar Sesion">

      <form action="" onSubmit={handleSubmit}>
        <Grid container>

          <Grid item xs={12} sx={{mt:2}}>

            <TextField 
                label="Email" 
                type="email" 
                placeholder="Email" 
                fullWidth
                name='email'
                

            />

          </Grid>

          <Grid item xs={12} sx={{ mt:2 }}>

              <TextField 
              label="Password" 
              type="password" 
              placeholder="Password" 
              fullWidth
              name='password'
              />

          </Grid>

          <Grid container spacing={2} sx={{ mb:2, mt:1 }} >

            <Grid item xs={12} sm={6}>

              <Button type="submit" variant='contained' fullWidth>
                Iniciar Sesión
              </Button>

            </Grid>

            <Grid item xs={12} sm={6}>
                <Button  
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

          <Grid container direction='row' justifyContent='end' sx={{}}>
            <span>No tienes cuenta?</span>
            <Link component={ RouterLink } color='inherit' to='/auth/register' sx={{ ml:1 }}>
               Registrate
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
