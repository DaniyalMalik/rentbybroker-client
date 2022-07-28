import * as React from 'react';
import {
  Box,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  SwipeableDrawer,
  List,
  Divider,
} from '@mui/material';
import {
  Mail as MailIcon,
  MoveToInbox as InboxIcon,
} from '@mui/icons-material';

export default function Drawer(open, toggleDrawer) {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={typeof toggleDrawer === 'function' && toggleDrawer(false)}
      onKeyDown={typeof toggleDrawer === 'function' && toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
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
      </List>
    </Box>
  );

  return (
    <div>
      {console.log(toggleDrawer, 'toggleDrawer')}
      <SwipeableDrawer
        anchor='left'
        open={open}
        onClose={typeof toggleDrawer === 'function' && toggleDrawer(false)}
        onOpen={typeof toggleDrawer === 'function' && toggleDrawer(true)}>
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
