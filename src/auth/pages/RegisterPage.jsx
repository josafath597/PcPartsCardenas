import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear una cuenta'>
      <form>
        <Grid container>

        <Grid item xs={12} sx={{mt:2}}>

          <TextField 
            label="Nombre" 
            type="text" 
            placeholder="Nombre" 
            fullWidth
            name='name'
              />

        </Grid>

        <Grid item xs={12} sx={{mt:2}}>

          <TextField 
            label="Email" 
            type="email" 
            placeholder="Email" 
            fullWidth
            name='email'
              />

        </Grid>

        <Grid item xs={12} sx={{mt:2}}>

          <TextField 
            label="Password" 
            type="password" 
            placeholder="Password" 
            fullWidth
            name='password'
              />

        </Grid>

        <Grid item xs={12} sx={{mt:2}}>

          <TextField 
            label="Confirmar Password" 
            type="password" 
            placeholder="Confirmar Password" 
            fullWidth
            name='confirmPassword'
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
