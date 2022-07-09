import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { useFetch } from '../../hooks/useFetch';
import { ItemLayout } from '../layout/ItemLayout';
import { URL } from '../Url';
import { ItemCard } from './ItemCard';



export const ProductItems =  () => {

  const {data, isLoading} = useFetch(URL);
  console.log(data);
 
  return (
    isLoading ?
            
        <ItemLayout> <CircularProgress /> </ItemLayout> 
            
        :

    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'text' }}
      id="graphics"
    >
      <Container sx={{ mt: 1, mb: 20, display: 'flex', position: 'relative' }}>
        <Grid container spacing={2}>
        <Grid item sx={{ width: '100%'}}>
            <Typography sx={{color:'button.main', mb: 5, display: 'flex', justifyContent: 'center', fontSize: '40px', fontWeight: 'light'}}>
              Tarjetas Graficas mas vendidas
            </Typography>
        </Grid>
        {
              data.map((item, index) => (
                <Grid key={index} item xs={12} md={4}>
                  <ItemCard key={item.id} {...item} />
                </Grid>
                  ))
        }
        </Grid>
        
      </Container>

    </Box>
  )
}
