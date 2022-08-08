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
      <Card sx={{ maxWidth: 345, padding: '50px', borderRadius: '10px' }}>
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
          <TextField
            margin='normal'
            label='@'
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            margin='normal'
            label='******'
            fullWidth
            variant='outlined'
            size='small'
          />
          <Box sx={{ alignSelf: 'flex-end' }}>
            <Link to='/resetpassword'>Forgot password?</Link>
          </Box>
          <br />
          <Button
            variant='contained'
            fullWidth
            size='small'
            endIcon={<LoginIcon fontSize='small' />}>
            Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
