import React from 'react';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Box sx={{ height: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '100px',
          width: '100%',
          boxShadow: '0px -3px 5px 0px #adadad',
          borderRadius: '5px',
          // margin: '20px'
          position: 'fixed',
          bottom: 0,
        }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography
            sx={{ width: '50%', display: 'contents' }}
            color='primary'
            variant='h5'>
            RentByBroker
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '50%',
              flexWrap: 'wrap',
            }}>
            <Link to='/settings' style={{ textDecoration: 'none' }}>
              <span>Settings</span>
            </Link>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <span>Contact Us</span>
            </Link>
            <Link to='/addasset' style={{ textDecoration: 'none' }}>
              <span>List An Asset</span>
            </Link>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Box>&copy; 2022 RentByBroker. All rights reserved.</Box>
          <Box>
            <IconButton color='primary'>
              <FacebookIcon fontSize='small' />
            </IconButton>
            <IconButton color='primary'>
              <TwitterIcon fontSize='small' />
            </IconButton>
            <IconButton color='primary'>
              <InstagramIcon fontSize='small' />
            </IconButton>
            <IconButton color='primary'>
              <LinkedInIcon fontSize='small' />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
