import * as React from 'react';
import {
  Checkbox,
  Button,
  TextField,
  Box,
  FormControlLabel,
  FormGroup,
  FormLabel,
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
} from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { Update as UpdateIcon } from '@mui/icons-material';
// import { uuid } from 'uuidv4';

export default function Profile() {
  const [value, setValue] = React.useState();
  // const [country, setCountry] = React.useState('');
  // const [state, setState] = React.useState('');
  // const [city, setCity] = React.useState('');
  // const [countries, setCountries] = React.useState('');
  // const [cities, setCities] = React.useState('');

  // const handleChange = (e) => {
  //   console.log(e.target.value, 'e.target.value');
  //   setCountry(e.target.value);
  // };

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
      {/* <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Countries</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={country}
          label='Age'
          onChange={handleChange}>
          {countries.length > 0 &&
            countries.map((val) => (
              <MenuItem key={uuid()} value={val.name}>
                {val.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl> */}
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
