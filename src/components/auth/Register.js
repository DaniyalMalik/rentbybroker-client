import * as React from 'react';
import {
  Card,
  CardContent,
  Button,
  TextField,
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import { VpnKey as VpnKeyIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Register() {
  const [alignment, setAlignment] = React.useState('owner');

  const handleChange = (event) => {
    setAlignment(event.target.value);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        marginTop: '150px',
        marginBottom: '100px',
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
            Register
          </Typography>
          <TextField
            margin='normal'
            fullWidth
            label='First Name'
            variant='outlined'
            size='small'
          />
          <TextField
            margin='normal'
            fullWidth
            label='Last Name'
            variant='outlined'
            size='small'
          />
          <TextField
            margin='normal'
            fullWidth
            label='#'
            variant='outlined'
            size='small'
          />
          <TextField
            margin='normal'
            fullWidth
            label='@'
            variant='outlined'
            size='small'
          />
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
            label='Repeat Password'
            variant='outlined'
            size='small'
          />
          <ToggleButtonGroup
            color='primary'
            value={alignment}
            size='small'
            exclusive
            fullWidth
            onChange={handleChange}>
            <ToggleButton value='owner'>Owner</ToggleButton>
            <ToggleButton value='broker'>Broker</ToggleButton>
          </ToggleButtonGroup>
          <br />
          <Box sx={{ alignSelf: 'flex-end' }}>
            <Link to='/login'>Back to Login</Link>
          </Box>
          <br />
          <Button
            variant='contained'
            fullWidth
            size='small'
            endIcon={<VpnKeyIcon fontSize='small' />}>
            Register
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
