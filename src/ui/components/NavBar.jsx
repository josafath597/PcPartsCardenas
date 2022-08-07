import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from "react-router-dom";

import { AppBar, Avatar, Badge, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { startLogout } from '../../store/auth/thunks';


const pages = [
  {
    name: 'Tarjetas de Video',
    category: 'Graphics_Card',
  },
  {
    name: 'Procesadores',
    category: 'Processors',
  }
];
const settings = ['Iniciar Sesión', 'Cerrar Sesión'];

export const NavBar = () => {

  const dispatch = useDispatch();

  const {status, displayName, photoURL} = useSelector(state => state.auth);
  

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  

  const onLogout = () => {
    setAnchorElUser(null);
    dispatch(startLogout());
  }



  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <IconButton edge="start" component={ RouterLink } to='/home' color="text" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
            <InstallDesktopIcon fontSize='large' />
          </IconButton>
          
          <Typography
            variant="h6"
            noWrap
            component="p"
            textDecoration="none"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PcParts
          </Typography>

            {/* Responsive Styles */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.category} onClick={handleCloseNavMenu} component={ RouterLink } to={`/home/${page.category}`}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* --------------------Responsive Styles --------------------*/}

          <Typography
            variant="h5"
            noWrap
            cursor='none'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PcParts
          </Typography>
          
          {/*  ---------------------Finish Responsive Styles--------------------------- */}


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              size="large"
              aria-label="ProductsMenu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              Productos
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.category} onClick={handleCloseNavMenu} component={ RouterLink } to={`/home/${page.category}`}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          
          

          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              
              <Typography
                display={ !!displayName ? 'block' : 'none' }
                sx={{fontSize: '20px', mr: 3 }}>
                  {displayName}
              </Typography>
              
              
              <Tooltip title="ShoppingCartIcon">
                <IconButton sx={{ p: 0, color: 'text.main' }} component={ RouterLink } to='/home/shop'>
                  <Badge badgeContent={1} color="error" sx={{ mr: 2}}>
                    <ShoppingCartIcon sx={{ display: { xs: 'flex' } }} fontSize='large' />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="user" src= { !!photoURL ? `${photoURL}` : ''} />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {
                status === 'not-authenticated' ?
                <MenuItem key={settings[0]} onClick={handleCloseUserMenu} component={ RouterLink } to='/auth/login'>
                  <Typography textAlign="center">{settings[0]}</Typography>
                </MenuItem> 
                :
                <MenuItem key={settings[1]} onClick={onLogout} component={ RouterLink } to='/auth/login'>
                  <Typography textAlign="center">{settings[1]}</Typography>
                </MenuItem>
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
