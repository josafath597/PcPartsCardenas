import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const CartItem = () => {

  return (
    <List sx={{ width: '100%'}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="component" src='' />
        </ListItemAvatar>
      <ListItemText
        primary="GTX 1080"
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              1000 USD — Tu producto se envia al siguiente dia habil despues de la compra
              <br />
              Pzas: 3 
            </Typography>  
          </>
        }
        />
          <Button variant="contained" sx={{bgcolor:'secondary.main', m:1}}>Eliminar</Button>
      </ListItem>
      <Divider variant="inset" component="li" bgcolor="text.main" />
    </List>
  )
}
