import * as React from 'react';
import {
  Checkbox,
  Button,
  TextField,
  Box,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { Update as UpdateIcon } from '@mui/icons-material';

export default function Profile() {
  const [value, setValue] = React.useState();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <TextField fullWidth label='First Name' variant='outlined' size='small' />
      <br />
      <TextField fullWidth label='Last Name' variant='outlined' size='small' />
      <br />
      <PhoneInput
        country={'Pakistan'}
        inputProps={{
          required: true,
          style: { width: '100%', height: '40px' },
        }}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <br />
      <TextField
        fullWidth
        label='Company Name'
        variant='outlined'
        size='small'
      />
      <br />
      <TextField
        fullWidth
        type='file'
        helperText='Upload Profile Picture'
        variant='outlined'
        size='small'
      />
      <br />
      <TextField fullWidth label='Website' variant='outlined' size='small' />
      <br />
      <TextField
        fullWidth
        type='number'
        label='Fleet Size'
        variant='outlined'
        size='small'
      />
      <br />
      <FormGroup>
        <FormLabel component='legend'>Fleets</FormLabel>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label='Yachts'
        />
        <FormControlLabel
          disabled
          control={<Checkbox disabled />}
          label='Cars'
        />
        <FormControlLabel
          disabled
          control={<Checkbox disabled />}
          label='Homes/Villas'
        />
        <FormControlLabel
          disabled
          control={<Checkbox disabled />}
          label='Helicopters'
        />
        <FormControlLabel
          disabled
          control={<Checkbox disabled />}
          label='Airplanes'
        />
      </FormGroup>
      <br />
      <Button
        variant='contained'
        fullWidth
        size='small'
        endIcon={<UpdateIcon />}>
        Update Profile
      </Button>
    </Box>
  );
}
