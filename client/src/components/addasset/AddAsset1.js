import * as React from 'react';
import { Button, TextField, Box } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

export default function AddAsset1() {
  return (
    <Box
      sx={{
        width: '100%',
        // height: '90vh',
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <TextField
        label='Make'
        fullWidth
        sx={{ maxWidth: '80%' }}
        margin='normal'
        variant='outlined'
        size='small'
      />
      <TextField
        label='Model'
        fullWidth
        sx={{ maxWidth: '80%' }}
        type='number'
        margin='normal'
        variant='outlined'
        size='small'
      />
      <TextField
        label='Length'
        fullWidth
        sx={{ maxWidth: '80%' }}
        type='number'
        margin='normal'
        variant='outlined'
        size='small'
      />
      <TextField
        label='Year'
        type='number'
        margin='normal'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='Name'
        margin='normal'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='Major Cities'
        margin='normal'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='Pick Up Point'
        margin='normal'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='Drop Off Point'
        margin='normal'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='Booking Number'
        margin='normal'
        type='number'
        sx={{ maxWidth: '80%' }}
        fullWidth
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
