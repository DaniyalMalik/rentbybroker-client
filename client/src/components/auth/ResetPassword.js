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
      <Card sx={{ maxWidth: 345, padding: '50px' }}>
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Typography variant='h3' color='primary'>
            Reset Password
          </Typography>
          <br />
          <TextField label='@' fullWidth variant='outlined' size='small' />
          <br />
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
            endIcon={<SendIcon />}>
            Send
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
