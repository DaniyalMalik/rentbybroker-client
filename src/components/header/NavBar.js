import * as React from 'react';
import {
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
  ListItemIcon,
  Divider,
  FormControlLabel,
  Switch,
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Login as LoginIcon,
  AddBox as AddBoxIcon,
  VpnKey as VpnKeyIcon,
  Settings as SettingsIcon,
  ContactPage as ContactPageIcon,
  Logout as LogoutIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(0);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(0);
  // const [left, setLeft] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const toggleDrawer = (open, event) => {
  //   if (
  //     event &&
  //     event.type === 'keydown' &&
  //     (event.key === 'Tab' || event.key === 'Shift')
  //   ) {
  //     return;
  //   }

  //   setLeft(open);
  // };

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
      open={isMobileMenuOpen}
      id={mobileMenuId}
      onClose={handleMobileMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
      {loggedIn ? (
        <div>
          <MenuItem>
            <Avatar
              alt='Remy Sharp'
              color='primary'
              sx={{ width: 36, height: 36 }}
              src='/static/images/avatar/2.jpg'
            />
            Test User
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Badge badgeContent={10} max={9} color='error'>
                <NotificationsIcon fontSize='small' color='primary' />
              </Badge>
            </ListItemIcon>
            Notifications
          </MenuItem>
          <MenuItem>
            <Link
              to='/addasset'
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'contents',
              }}>
              <ListItemIcon>
                <AddBoxIcon color='primary' fontSize='small' />
              </ListItemIcon>
              List An Asset
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/search'
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'contents',
              }}>
              <ListItemIcon>
                <SearchIcon color='primary' fontSize='small' />
              </ListItemIcon>
              Search
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/settings'
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'contents',
              }}>
              <ListItemIcon>
                <SettingsIcon color='primary' fontSize='small' />
              </ListItemIcon>
              Settings
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/contact'
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'contents',
              }}>
              <ListItemIcon>
                <ContactPageIcon color='primary' fontSize='small' />
              </ListItemIcon>
              Contact Us
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/'
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'contents',
              }}>
              <ListItemIcon>
                <LogoutIcon color='primary' fontSize='small' />
              </ListItemIcon>
              Logout
            </Link>
          </MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem>
            <Link
              to='/search'
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'contents',
              }}>
              <ListItemIcon>
                <SearchIcon color='primary' fontSize='small' />
              </ListItemIcon>
              Search
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/contact'
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'contents',
              }}>
              <ListItemIcon>
                <ContactPageIcon color='primary' fontSize='small' />
              </ListItemIcon>
              Contact Us
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/login'
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'contents',
              }}>
              <ListItemIcon>
                <LoginIcon color='primary' fontSize='small' />
              </ListItemIcon>
              Login
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/register'
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'contents',
              }}>
              <ListItemIcon>
                <VpnKeyIcon color='primary' fontSize='small' />
              </ListItemIcon>
              Register
            </Link>
          </MenuItem>
        </div>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Drawer open={left} toggleDrawer={toggleDrawer} /> */}
      <AppBar position='fixed' sx={{ backgroundColor: '#ffffff' }}>
        <Toolbar
          sx={{
            minHeight: '50px !important',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          {/* {loggedIn && (
            <IconButton
              edge='start'
              color='primary'
              aria-label='open drawer'
              onClick={(e) => toggleDrawer(true, e)}
              sx={{ mr: 2 }}>
              <MenuIcon fontSize='small' />
            </IconButton>
          )} */}
          <Link
            to={loggedIn ? '/' : '/login'}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant='h6'
              noWrap
              component='div'
              color='primary'
              // sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              RentByBroker
            </Typography>
          </Link>
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <Box>
            <FormControlLabel
              control={
                <Switch
                  color='primary'
                  size='small'
                  checked={loggedIn}
                  onClick={() => setLoggedIn((prev) => !prev)}
                />
              }
              label='Logged In'
              sx={{ color: '#1a237e' }}
            />
            {loggedIn ? (
              <Box sx={{ display: { xs: 'none', sm: 'none', md: 'inline' } }}>
                <Link
                  to='/'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}>
                  <Button color='primary'>Home</Button>
                </Link>
                <Link
                  to='/addasset'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}>
                  <Button color='primary'>List An Asset</Button>
                </Link>
                <Link
                  to='/contact'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}>
                  <Button color='primary'>Contact Us</Button>
                </Link>
                <Link
                  to='/search'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}>
                  <Button color='primary'>Search</Button>
                </Link>
              </Box>
            ) : (
              <Box sx={{ display: { xs: 'none', sm: 'none', md: 'inline' } }}>
                <Link
                  to='/'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}>
                  <Button color='primary'>Home</Button>
                </Link>
                <Link
                  to='/contact'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}>
                  <Button color='primary'>Contact Us</Button>
                </Link>
                <Link
                  to='/login'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}>
                  <Button color='primary'>Login</Button>
                </Link>
                <Link
                  to='/register'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}>
                  <Button color='primary'>Register</Button>
                </Link>
              </Box>
            )}
          </Box>
          {/* <FormControl
            size='small'
            sx={{ m: 1, width: '30ch' }}
            variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-search'>Search</InputLabel>
            <OutlinedInput
              margin='none'
              id='outlined-adornment-search'
              endAdornment={
                <InputAdornment position='end'>
                  <SearchIcon color='primary' fontSize='small' />
                </InputAdornment>
              }
              label='Search'
            />
          </FormControl> */}
          {loggedIn && (
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'inline' } }}>
              <IconButton
                aria-label='show 9 plus new notifications'
                color='primary'>
                <Badge badgeContent={10} max={9} color='error'>
                  <NotificationsIcon fontSize='small' />
                </Badge>
              </IconButton>
              <Link to='/settings' style={{ textDecoration: 'none' }}>
                <Typography
                  sx={{ display: 'contents', color: '#000' }}
                  variant='p'>
                  Test User
                </Typography>
                <IconButton
                  edge='end'
                  aria-label='account of current user'
                  aria-controls={menuId}
                  aria-haspopup='true'
                  color='primary'>
                  <Avatar
                    alt='Remy Sharp'
                    sx={{ width: 36, height: 36 }}
                    src='/static/images/avatar/2.jpg'
                  />
                </IconButton>
              </Link>
            </Box>
          )}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={handleMobileMenuOpen}
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              aria-label='show more'
              size='small'
              sx={{ ml: 2 }}
              aria-expanded={isMenuOpen ? 'true' : undefined}>
              {/* <Avatar
                alt='Remy Sharp'
                sx={{ width: 36, height: 36 }}
                src='/static/images/avatar/2.jpg'
              /> */}
              <MoreVertIcon fontSize='small' color='primary' />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
