// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Settings from '@mui/icons-material/Settings';
// import { Link } from 'react-router-dom';
// import {
//   InputBase,
//   AppBar,
//   Badge,
//   Toolbar,
//   Typography,
//   Button,
//   FormControlLabel,
//   Switch,
// } from '@mui/material';
// import {
//   MoreVert as MoreIcon,
//   Menu as MenuIcon,
//   Search as SearchIcon,
//   Notifications as NotificationsIcon,
//   Login as LoginIcon,
//   VpnKey as VpnKeyIcon,
// } from '@mui/icons-material';

// export default function AccountMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <React.Fragment>
//       <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
//         <IconButton
//           onClick={handleClick}
//           size='small'
//           sx={{ ml: 2 }}
//           aria-controls={open ? 'account-menu' : undefined}
//           aria-haspopup='true'
//           aria-expanded={open ? 'true' : undefined}>
//           <Avatar
//             alt='Remy Sharp'
//             sx={{ width: 36, height: 36 }}
//             src='/static/images/avatar/2.jpg'
//           />
//         </IconButton>
//       </Box>
//       <Menu
//         anchorEl={anchorEl}
//         id='account-menu'
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: 'visible',
//             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//             mt: 1.5,
//             '& .MuiAvatar-root': {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             '&:before': {
//               content: '""',
//               display: 'block',
//               position: 'absolute',
//               top: 0,
//               right: 14,
//               width: 10,
//               height: 10,
//               bgcolor: 'background.paper',
//               transform: 'translateY(-50%) rotate(45deg)',
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
//         <MenuItem>
//           <Avatar
//             alt='Remy Sharp'
//             sx={{ width: 36, height: 36 }}
//             src='/static/images/avatar/2.jpg'
//           />
//           Test User
//         </MenuItem>
//         <Divider />
//         <MenuItem>
//           <Link
//             to='/settings'
//             style={{
//               textDecoration: 'none',
//               color: 'inherit',
//               display: 'contents',
//             }}>
//             <ListItemIcon>
//               <Settings fontSize='small' />
//             </ListItemIcon>
//           </Link>
//           Settings
//         </MenuItem>
//         <MenuItem>
//           <Link
//             to='/search'
//             style={{
//               textDecoration: 'none',
//               color: 'inherit',
//               display: 'contents',
//             }}>
//             <ListItemIcon>
//               <SearchIcon fontSize='small' />
//             </ListItemIcon>
//           </Link>
//           Search
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <Badge badgeContent={17} color='error'>
//               <NotificationsIcon />
//             </Badge>
//           </ListItemIcon>
//           Notifications
//         </MenuItem>
//         <MenuItem>
//           <Link
//             to='/login'
//             style={{
//               textDecoration: 'none',
//               color: 'inherit',
//               display: 'contents',
//             }}>
//             <ListItemIcon>
//               <LoginIcon fontSize='small' />
//             </ListItemIcon>
//           </Link>
//           Login
//         </MenuItem>
//         <MenuItem>
//           <Link
//             to='/regsiter'
//             style={{
//               textDecoration: 'none',
//               color: 'inherit',
//               display: 'contents',
//             }}>
//             <ListItemIcon>
//               <VpnKeyIcon fontSize='small' />
//             </ListItemIcon>
//           </Link>
//           Register
//         </MenuItem>
//       </Menu>
//     </React.Fragment>
//   );
// }
