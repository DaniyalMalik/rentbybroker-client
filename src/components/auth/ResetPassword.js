import * as React from 'react';
import {
  Card,
  CardContent,
  Button,
  TextField,
  Box,
  Typography,
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function ResetPassword() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        display: 'flex',
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
          <Typography variant='h4' color='primary'>
            Reset Password
          </Typography>
          <TextField
            margin='normal'
            label='@'
            fullWidth
            variant='outlined'
            size='small'
          />
          <Box>
            <Link style={{ alignSelf: 'flex-end' }} to='/login'>
              Back to Login
            </Link>
          </Box>
          <br />
          <Button
            variant='contained'
            fullWidth
            size='small'
            endIcon={<SendIcon fontSize='small' />}>
            Send
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
