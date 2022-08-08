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
import { Key as KeyIcon } from '@mui/icons-material';

export default function ForgotPassword() {
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
          <Typography variant='h3' color='primary'>
            Set New Password
          </Typography>
          <TextField
            margin='normal'
            fullWidth
            label='******'
            variant='outlined'
            size='small'
          />
          <TextField
            margin='normal'
            fullWidth
            label='New Password'
            variant='outlined'
            size='small'
          />
          <TextField
            margin='normal'
            fullWidth
            label='Repeat New Password'
            variant='outlined'
            size='small'
          />
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant='contained'
            fullWidth
            size='small'
            endIcon={<KeyIcon fontSize='small'/>}>
            Change
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
