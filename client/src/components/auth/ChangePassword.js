import * as React from 'react';
import { Button, TextField, Box } from '@mui/material';
import { Key as KeyIcon } from '@mui/icons-material';

export default function ChangePassword() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <TextField fullWidth label='******' variant='outlined' size='small' />
      <br />
      <TextField
        fullWidth
        label='New Password'
        variant='outlined'
        size='small'
      />
      <br />
      <TextField
        fullWidth
        label='Repeat New Password'
        variant='outlined'
        size='small'
      />
      <br />
      <Button variant='contained' fullWidth size='small' endIcon={<KeyIcon />}>
        Change
      </Button>
    </Box>
  );
}
