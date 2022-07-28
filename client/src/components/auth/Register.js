import * as React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Box,
  Typography,
} from '@mui/material';
import { Login as LoginIcon } from '@mui/icons-material';

export default function Register() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Card sx={{ maxWidth: 345, padding: '50px' }}>
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Typography variant='h3' color='primary'>
            Register
          </Typography>
          <br />
          <TextField label='First Name' variant='outlined' size='small' />
          <br />
          <TextField label='Last Name' variant='outlined' size='small' />
          <br />
          <TextField label='@' variant='outlined' size='small' />
          <br />
          <TextField label='******' variant='outlined' size='small' />
          <br />
          <TextField label='Repeat Password' variant='outlined' size='small' />
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant='contained'
            fullWidth
            size='small'
            startIcon={<LoginIcon />}>
            Register
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
