import { Box, Typography } from '@mui/material';
import { SearchOff as SearchOffIcon } from '@mui/icons-material';
import React from 'react';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '90vh',
      }}>
      <Typography variant='h1' color='primary'>
        <SearchOffIcon fontSize='x-large' />
        Page Not Found
      </Typography>
    </Box>
  );
}
