import { Box, Container, Grid, Typography } from "@mui/material";

import ProductValue from '../../assets/productValues1.png';
import ProductValue2 from '../../assets/productValues2.png';
import ProductValue3 from '../../assets/productValues3.png';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

export const ProductValues = () => {
  
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'text' }}
    >

      <Container sx={{ mt: 7, mb: 10, display: 'flex', position: 'relative' }}>
        <Grid container>

          <Grid item sx={{ width: '100%'}}>
            <Typography sx={{color:'button.main', mb: 5, display: 'flex', justifyContent: 'center', fontSize: '40px', fontWeight: 'light'}}>
              Comprar en PCParts es muy fácil, rapido y seguro.
            </Typography>
          </Grid>

          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={ProductValue}
                  alt="suitcase"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" sx={{ my: 5 , fontSize: 20}}>
                  Envios Gratis
                </Typography>
                <Typography variant="h5" textAlign={'center'} sx={{ fontSize: 18 }}>
                  Envíos seguros a todo el país gratis en compras superiores a $70 USD.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={ProductValue2}
                  alt="graph"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" sx={{ my: 5, fontSize: 20}}>
                  Soporte 24/7
                </Typography>
                <Typography variant="h5" textAlign={'center'} sx={{ fontSize: 18 }}>
                Nuestro equipo de soporte te ayudara a resolver cualquier problema que tengas en tu orden
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={ProductValue3}
                  alt="clock"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" sx={{ my: 5 , fontSize: 20 }}>
                  MSI
                </Typography>
                <Typography variant="h5" textAlign={'center'} sx={{ fontSize: 18 }}>
                  Compras a meses sin intereses y obten un descuento del 25% con tarjetas de crédito participantes
                </Typography>
              </Box>
            </Grid>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}