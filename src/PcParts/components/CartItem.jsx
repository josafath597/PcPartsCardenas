import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const CartItem = (props) => {

  const {name, price, image, quantity, id} = props;

  const {RemoveItemCart} = useContext(CartContext);

  return (
    <List sx={{ width: '100%'}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="component" src={image} />
        </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              { price } — Tu producto se envia al siguiente dia habil despues de la compra
              <br />
              Pzas: { quantity } 
            </Typography>  
          </>
        }
        />
          <Button variant="contained" onClick={() => RemoveItemCart(id)} sx={{bgcolor:'secondary.main', m:1}}>Eliminar</Button>
      </ListItem>
      <Divider variant="inset" component="li" bgcolor="text.main" />
    </List>
  )
}
