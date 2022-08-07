import * as React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

export default function Contact() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Typography variant='h3' color='primary'>
        Contact Us
      </Typography>
      <TextField
        label='Name'
        fullWidth
        sx={{ maxWidth: '80%' }}
        margin='normal'
        variant='outlined'
        size='small'
      />
      <TextField
        label='@'
        fullWidth
        sx={{ maxWidth: '80%' }}
        margin='normal'
        variant='outlined'
        size='small'
      />
      <TextField
        label='Subject'
        fullWidth
        sx={{ maxWidth: '80%' }}
        margin='normal'
        variant='outlined'
        size='small'
      />
      <TextField
        label='Message'
        margin='normal'
        sx={{ maxWidth: '80%' }}
        fullWidth
        minRows={5}
        multiline
        variant='outlined'
        size='small'
      />
      <br />
      <Button
        variant='contained'
        sx={{ maxWidth: '80%' }}
        fullWidth
        size='small'
        endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  );
}
