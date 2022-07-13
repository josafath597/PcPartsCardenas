import { useState } from "react";
import { Alert, Box, Button, ButtonGroup, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const ItemDetail = ({ open, handleClose , handleClickOpen , name, image, price, stock}) => {

    const [quantity, setQuantity] = useState(1);
    const [alert, setAlert] = useState(false);

    const handleAddStock = (data = 0) => {
        const newQuantity = quantity + data;
        if (newQuantity > stock) {
            setAlert(true);
            return;
        }
        else if (newQuantity < 1) {
            return;
        }
        else {
            setQuantity(newQuantity);
            setAlert(false);
            return;
        }
    }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Ver mas
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            <Typography sx={{ mb: 1, fontSize: '20px' }} >
                {name} --- ¡Compra y recibe un Xbox Game Pass con vigencia de 1 mes! Limitado a 1 código por cliente o pedido!
            </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box                
            component="img"
            src={image}
            alt="graphic"
            sx={{ height: '100%'
                , width: '100%' }}
            />
            <Box sx={{ mb: 1 }}> 
                <Typography sx={{ fontSize: '25px', color: 'primary.main' }} > Precio: {price} </Typography>
                <Typography sx={{ fontSize: '15px', color: 'primary.main' }} > Stock: {stock} </Typography>
            </Box>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between'}}>

                <Grid item sx={{mt:1}}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{mr: 1, mb:1}}>
                        <Button onClick={() => handleAddStock(-1)}>-</Button>
                        <Button>  {quantity}  </Button>
                        <Button onClick={() => handleAddStock(1)}>+</Button>
                    </ButtonGroup>  
                    <Button variant="contained" sx={{bgcolor:'secondary.main'}}>Añadir al Carrito <ShoppingCartIcon sx={{ml: 1}}/> </Button>
                </Grid>
                {
                    alert && <Alert severity="error" sx={{mt:2}}> No tenemos stock suficiente </Alert>
                }
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
