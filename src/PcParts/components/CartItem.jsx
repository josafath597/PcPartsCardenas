import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { useDispatch } from 'react-redux';
import { removeCartItem } from "../../store/Cart/CartSlice";


export const CartItem = ({image, name, stock, cost, quantity, id}) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch( removeCartItem(id) );
  }

  

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
              { cost } USD — Tu producto se envia al siguiente dia habil despues de la compra
              <br />
              Pzas: {stock}, En el carrito: {quantity}
            </Typography>  
          </>
        }
        />
          <Button variant="contained" onClick={handleClick} sx={{bgcolor:'secondary.main', m:1}}>Eliminar</Button>
      </ListItem>
      <Divider variant="inset" component="li" bgcolor="text.main" />
    </List>
  )
}
