import { Button, Typography } from "@mui/material"
import ProductLayout from "../layout/ProductLayout";


const backgroundImage =
  'https://images.unsplash.com/photo-1616877562265-d4ffd9d6f47f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80';

export const ProductHero = () => {
  return (
    <ProductLayout 
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="text" align="center" variant="h2" marked="center">
        JUEGA PARA GANAR
      </Typography>
      <Typography
        color="text"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        TECNOLOGIA RTX PARA TU PC
      </Typography>
      <Button
        variant="contained"
        color="button"
        size="large"
        component="a"
        href="#graphics"
        sx={{ minWidth: 200 }}
      >
        VER CATALOGO
      </Button>
      <Typography variant="body2" color="text" sx={{ mt: 2 }}>
        INCREIBLES OFERTAS PARA TU PC
      </Typography>
      
    </ProductLayout>
  )
}
