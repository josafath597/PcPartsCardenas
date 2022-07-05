import { Box, Container, Grid } from "@mui/material"
import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { GetGraphicsById } from "../../selectors/GetGraphicsById";


export const ItemPage = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    }

    const graphics = useMemo(() => GetGraphicsById(id), [id]);

    if (!graphics) {
        return <Navigate to="/" />;
      }

    const {name, price, image, stock, description:{p1, p2} } = graphics;

    
    

    return (
        <Box
        component="section" sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'text' }} >

        <Container sx={{ mt: 7, mb: 10, display: 'flex', position: 'relative' }}>
            <Grid container>
                <Grid item sx={{}}>

                </Grid>
            </Grid>
        </Container>
        </Box>
    )
}
