import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom"
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { ItemDetail } from './ItemDetail';

export const ItemCard = (props) => {
  const {id, name, price, image} = props;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 400 , mb:3 }}>
        <CardMedia
          component="img"
          height="100%"
          image={image}
          alt="graphic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button component={ RouterLink } size="small" to={`/home/${id}`}>
            Ver mas
          </Button> */}
            <ItemDetail id={id} open={open} handleClose={handleClose} handleClickOpen={handleClickOpen} {...props}/>

        </CardActions>
      </Card>

    </Grid>
  )
}
