import { Box, Container, Grid, Typography } from '@mui/material'
import { graphics } from '../../data/graphics';
import { ItemCard } from './ItemCard';



export const ProductItems =  () => {
  
  
  

  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'text' }}
    >
      <Container sx={{ mt: 1, mb: 20, display: 'flex', position: 'relative' }}>
        <Grid container spacing={2}>
        <Grid item sx={{ width: '100%'}}>
            <Typography sx={{color:'button.main', mb: 5, display: 'flex', justifyContent: 'center', fontSize: '40px', fontWeight: 'light'}}>
              Tarjetas Graficas mas vendidas
            </Typography>
        </Grid>
        {
              graphics.map((item) => (
                <Grid item xs={12} md={4}>
                  <ItemCard key={item.id} {...item} />
                </Grid>
                  ))
        }
        </Grid>
        
      </Container>

    </Box>
  )
}
