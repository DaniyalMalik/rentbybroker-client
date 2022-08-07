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
            <Link to='/' style={{ textDecoration: 'none' }}>
              <span>First Link</span>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <span>Second Link</span>
            </Link>
            <Link to='/addasset' style={{ textDecoration: 'none' }}>
              <span>Third Link</span>
            </Link>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Box>&copy; 2022 RentByBroker. All rights reserved.</Box>
          <Box>
            <IconButton color='primary'>
              <FacebookIcon />
            </IconButton>
            <IconButton color='primary'>
              <TwitterIcon />
            </IconButton>
            <IconButton color='primary'>
              <InstagramIcon />
            </IconButton>
            <IconButton color='primary'>
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
