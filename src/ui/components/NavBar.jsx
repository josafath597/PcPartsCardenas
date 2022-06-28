import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom"

import { AppBar, Avatar, Badge, Box, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const NavBar = () => {

  // const settings = ["Profile","Logout"];
  const settings = [
    {
      name: 'Iniciar Sesión',
      link: '/auth/login'
    }
  ];

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <AppBar color="primary" position="fixed">
        <Toolbar>

          <Grid container sx={{display: 'flex', justifyContent: 'space-between'}}>

            <Grid item sx={{ display: { xs: 'none',sm: 'flex', md: 'flex' }, alignItems: 'center' }} >
              <IconButton edge="start" color="inherit" component={ RouterLink } to='/home'>
                <InstallDesktopIcon fontSize='large'/>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ml: 4 , fontWeight: 700, }}>
                PcParts
              </Typography>
            </Grid>


            <Grid item sx={{ width: { xs: '100%',sm: '50%'}, display: 'flex', justifyContent: { xs: 'space-between',sm: 'flex-end'}, }}>
    
                  <Tooltip title="Shopping Cart">
                    <IconButton sx={{ mr:{xs:1, sm:3, md:3, lg:3} }} color="inherit" component={ RouterLink } to='/home/shop'>
                      <Badge badgeContent={3} color="error">
                        <ShoppingCartIcon sx={{ color: 'Menu' }} fontSize='large'/>
                      </Badge>
                    </IconButton>
                  </Tooltip>

                

                  <Tooltip title="User">
                    <IconButton onClick={handleOpenUserMenu}>
                      <Avatar alt="user" src="" />
                    </IconButton>
                  </Tooltip>

            </Grid>
              
          </Grid>
              
              
          <Box>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu} component={ RouterLink } to='/auth/login'>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>         
        </Toolbar>


      </AppBar>
    </Box>
  )
}
