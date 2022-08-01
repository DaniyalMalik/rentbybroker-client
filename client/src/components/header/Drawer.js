import * as React from 'react';
import {
  Box,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  SwipeableDrawer,
  List,
  // Divider,
} from '@mui/material';
import {
  Settings as SettingsIcon,
  Home as HomeIcon,
  ContactPage as ContactPageIcon,
  AddBox as AddBoxIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Drawer({ open, toggleDrawer }) {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={(e) => toggleDrawer(false, e)}
      onKeyDown={(e) => toggleDrawer(false, e)}>
      <List>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to='/addasset'
          style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddBoxIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={'List An Asset'} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to='/settings'
          style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={'Settings'} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to='/contact'
          style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContactPageIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={'Contact Us'} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor='left'
      open={open}
      onClose={(e) => toggleDrawer(false, e)}
      onOpen={(e) => toggleDrawer(true, e)}>
      {list()}
    </SwipeableDrawer>
  );
}
