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

export default function Drawer({ open, toggleDrawer }) {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={(e) => toggleDrawer(false, e)}
      onKeyDown={(e) => toggleDrawer(false, e)}>
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
    <SwipeableDrawer
      anchor='left'
      open={open}
      onClose={(e) => toggleDrawer(false, e)}
      onOpen={(e) => toggleDrawer(true, e)}>
      {list()}
    </SwipeableDrawer>
  );
}
