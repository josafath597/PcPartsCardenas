import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Link as RouterLink } from "react-router-dom"

export const ItemCard = ({
    id,
    name,
    image,
    price
}) => {
  return (
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
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={ RouterLink } size="small" to={`/home/${id}`}>
          Ver mas
        </Button>
      </CardActions>
    </Card>
  )
}
