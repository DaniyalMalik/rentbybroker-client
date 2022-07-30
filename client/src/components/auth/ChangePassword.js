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

export default function ChangePassword() {
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
            Change Password
          </Typography>
          <br />
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
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant='contained'
            fullWidth
            size='small'
            endIcon={<KeyIcon />}>
            Change
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
