import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const ItemCard = ({
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
        <Button size="small">Ver mas</Button>
      </CardActions>
    </Card>
  )
}
