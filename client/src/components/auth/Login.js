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

export default function Login() {
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
            Login
          </Typography>
          <br />
          <TextField label='@' variant='outlined' size='small' />
          <br />
          <TextField label='******' variant='outlined' size='small' />
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant='contained'
            fullWidth
            size='small'
            startIcon={<LoginIcon />}>
            Login
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
