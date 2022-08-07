import { Alert, Box, Button, ButtonGroup, CircularProgress, Container, Grid, Typography } from "@mui/material"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { GetGraphicsById } from "../../selectors/GetGraphicsById";
import { SpinnerLayout } from "../layout/SpinnerLayout";
import { useCounter } from "../../hooks/useCounter";
import { OpenDialog } from "../components/OpenDialog";

const initialState = {
    "name": "",
    "price": "",
    "image": "",
    "stock": "",
    "description": {
        "p1": "",
        "p2": ""
    }
};


export const ItemPage = () => {

    const {id, category} = useParams();


    const navigate = useNavigate();
    
    const handleReturn = () => {
        navigate(-1);
    }

    const {isLoading , data} = GetGraphicsById(id, category);

    if(!isLoading) {
        initialState.name = data.name;
        initialState.price = data.price;
        initialState.image = data.image;
        initialState.stock = data.stock;
        initialState.description.p1 = data.description.p1;
        initialState.description.p2 = data.description.p2;

    }
        
    const {name, price, image, stock, description:{p1, p2} } = initialState;

    const {alert, counter, setCounter, increment, decrement} = useCounter(stock);


    if (!initialState) {
        return <Navigate to="/" />;
      }

    return (

        isLoading ?

        <SpinnerLayout>
            <Box sx={{ display: 'flex', height: '70vh' }}>
                <CircularProgress />
            </Box>
        </SpinnerLayout>    
            
        :
             
            <Box component="section" sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'text', height: 'auto'}} className="animate__animated animate__fadeIn animate__faster" >
                <Container sx={{ mt: 7, mb: 8, display: 'flex', position: 'relative'}} maxWidth='xl'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box                
                                component="img"
                                src={image}
                                alt="graphic"
                                width="auto"
                                height="400px"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2, bgcolor:'text.secondary'}}>

                                <Typography sx={{ mb: 1, fontSize: '20px' }} >
                                    {name} --- ¡Compra y recibe un Xbox Game Pass con vigencia de 1 mes! Limitado a 1 código por cliente o pedido!
                                </Typography>
                                <Box sx={{ mb: 1 }}> 
                                    <Typography sx={{ fontSize: '25px' }} > Precio: {price} </Typography>
                                    <Typography sx={{ fontSize: '15px' }} > Stock: {stock} </Typography>
                                </Box>
                                <Grid container sx={{ display: 'flex', justifyContent: 'space-between'}}>

                                    <Grid item sx={{mt:1}}>
                                        <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{mr: 1, mb:1}}>
                                            <Button onClick={decrement}>-</Button>
                                            <Button>  {counter}  </Button>
                                            <Button onClick={increment}>+</Button>
                                        </ButtonGroup>  
                                        <OpenDialog {...data} quantity={counter} setCounter={setCounter}/>
                                    </Grid>
                                    <Grid item sx={{mt:1}}>
                                        <Button variant="contained" sx={{bgcolor:'error.main'}} onClick={handleReturn}>Regresar</Button>
                                    </Grid>

                                </Grid>
                                {
                                    alert && <Alert severity="error" sx={{mt:2}}> No tenemos stock suficiente </Alert>
                                }
                            </Box>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ fontSize: '20px' }}>
                                {p1}
                            </Typography>
                            <br/>
                            <Typography sx={{ fontSize: '20px' }}>
                                {p2}
                            </Typography>
                        </Grid>-
                    </Grid>
                </Container>
            </Box>      
    )
}
