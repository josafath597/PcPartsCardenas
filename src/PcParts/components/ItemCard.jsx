import { Link as RouterLink } from "react-router-dom"
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'


export const ItemCard = (props) => {
  const {id, name, price, image, category} = props;

  return (
    <Grid item xs={12} md={4} lg={3}>
      <Card sx={{ mb:3 , maxHeight:'430px', display: 'flex' , flexDirection:'column' , minHeight:'100%' }}>
        <CardMedia
          component="img"
          width="auto"
          height="280px"
          image={image}
          alt="graphic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontSize="20px">
            {name}
          </Typography>
          <Typography variant="body2">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small" component={ RouterLink } to={`/home/${category}/${id}`}>
            Ver mas
          </Button>
        </CardActions>
      </Card>

    </Grid>
  )
}
