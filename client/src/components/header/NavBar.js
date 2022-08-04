import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  InputBase,
  Menu,
  MenuItem,
  AppBar,
  Box,
  Badge,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
import {
  More as MoreIcon,
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  AccountCircle,
} from '@mui/icons-material';
import { Link, Outlet } from 'react-router-dom';

import Drawer from './Drawer';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(0);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(0);
  const [left, setLeft] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const toggleDrawer = (open, event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setLeft(open);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem dense onClick={handleMenuClose}>
        Profile
      </MenuItem>
      <MenuItem dense onClick={handleMenuClose}>
        My account
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton aria-label='show 17 new notifications' color='inherit'>
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'>
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer open={left} toggleDrawer={toggleDrawer} />
      <AppBar position='fixed'>
        <Toolbar sx={{ minHeight: '50px !important' }}>
          {loggedIn && (
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={(e) => toggleDrawer(true, e)}
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Link
            to={loggedIn ? '/' : '/login'}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ display: { xs: 'none', sm: 'block' } }}>
              RentByBroker
            </Typography>
          </Link>
          {loggedIn && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <FormControlLabel
              control={
                <Switch
                  color='secondary'
                  checked={loggedIn}
                  onClick={() => setLoggedIn((prev) => !prev)}
                />
              }
              label='Logged In'
            />
            {loggedIn ? (
              <>
                <IconButton
                  aria-label='show 17 new notifications'
                  color='inherit'>
                  <Badge badgeContent={10} max={9} color='error'>
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <Link to='/settings' style={{ textDecoration: 'none' }}>
                  <IconButton
                    edge='end'
                    aria-label='account of current user'
                    aria-controls={menuId}
                    aria-haspopup='true'
                    // onClick={handleProfileMenuOpen}
                    color='inherit'>
                    <Avatar
                      alt='Remy Sharp'
                      sx={{ width: 36, height: 36 }}
                      src='/static/images/avatar/2.jpg'
                    />
                  </IconButton>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Button color='inherit'>Login</Button>
                </Link>
                <Link
                  to='/register'
                  style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Button color='inherit'>Register</Button>
                </Link>
              </>
            )}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'>
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Outlet />
    </Box>
  );
}
