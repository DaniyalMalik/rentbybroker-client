import * as React from 'react';
import {
  Card,
  CardContent,
  Button,
  TextField,
  Box,
  Typography,
} from '@mui/material';
import { Login as LoginIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        marginTop: '50px',
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
          <TextField label='@' fullWidth variant='outlined' size='small' />
          <br />
          <TextField label='******' fullWidth variant='outlined' size='small' />
          <br />
          <Box sx={{ alignSelf: 'flex-end' }}>
            <Link to='/forgotpassword'>Forgot password?</Link>
          </Box>
          <br />
          <Button
            variant='contained'
            fullWidth
            size='small'
            endIcon={<LoginIcon />}>
            Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
