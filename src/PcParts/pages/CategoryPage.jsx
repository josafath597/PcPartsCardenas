import { useNavigate, useParams } from "react-router-dom";
import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import { SpinnerLayout } from "../layout/SpinnerLayout";
import { GetComponentsByCategory } from "../../selectors/GetComponentsByCategory";
import { ItemCard } from "../components/ItemCard";

export const CategoryPage =  () => {

    const {category} = useParams();

    const navigate = useNavigate();
    
    const handleReturn = () => {
        navigate(-1);
    }

    const {isLoading , data} = GetComponentsByCategory(category);



    
    return (
        isLoading ?
            
        <SpinnerLayout>
        <Box sx={{ display: 'flex', height: '64vh' }}>
            <CircularProgress />
        </Box>
        </SpinnerLayout>
            
            :

        <Box
        component="section"
        sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'grey.main' }}
        id="graphics"
        >
        <Container sx={{ mt: 1, mb: 20, display: 'flex', position: 'relative' }} maxWidth='xl'>
            <Grid container spacing={2}>
            <Grid item sx={{ width: '100%'}}>
                <Typography sx={{color:'button.main', mb: 5, display: 'flex', justifyContent: 'center', fontSize: '40px', fontWeight: 'light'}}>
                Productos mas vendidos 
                </Typography>
            </Grid>
            {
                data.map((item) => (
                    <ItemCard key={item.id} {...item} />
                    ))
            }
            </Grid>
            
        </Container>

        </Box>
  )
}
