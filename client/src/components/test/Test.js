import * as React from 'react';
import {
  Box,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  SwipeableDrawer,
  Button,
  List,
  Divider,
} from '@mui/material';
import {
  Mail as MailIcon,
  MoveToInbox as InboxIcon,
} from '@mui/icons-material';

export default function Drawer() {
  const [left, setLeft] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setLeft(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
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
      <Button onClick={toggleDrawer(true)}>Left</Button>
      <SwipeableDrawer
        anchor='left'
        open={left}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>
        {list('left')}
      </SwipeableDrawer>
    </div>
  );
}
