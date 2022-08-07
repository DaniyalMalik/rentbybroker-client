import * as React from 'react';
import {
  Checkbox,
  Button,
  TextField,
  Box,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
} from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { Update as UpdateIcon } from '@mui/icons-material';
import { Country, City } from 'country-state-city';

export default function Profile() {
  const [value, setValue] = React.useState();
  const [country, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');
  const [countries, setCountries] = React.useState([]);
  const [cities, setCities] = React.useState([]);

  React.useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  React.useEffect(() => {
    if (country) setCities(City.getCitiesOfCountry(country.isoCode));
  }, [country]);

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
      <PhoneInput
        country={'Pakistan'}
        inputProps={{
          required: true,
          style: { width: '100%', height: '40px' },
        }}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <TextField
        margin='normal'
        fullWidth
        label='Company Name'
        variant='outlined'
        size='small'
      />
      <TextField
        margin='normal'
        fullWidth
        type='file'
        helperText='Upload Profile Picture'
        variant='outlined'
        size='small'
      />
      <TextField
        margin='normal'
        fullWidth
        label='Website'
        variant='outlined'
        size='small'
      />
      <TextField
        margin='normal'
        fullWidth
        type='number'
        label='Fleet Size'
        variant='outlined'
        size='small'
      />
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
      <FormControl sx={{ marginTop: 1 }} fullWidth>
        <InputLabel id='demo-simple-select-label'>Country</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={country}
          label='Country'
          size='small'
          onChange={(e) => setCountry(e.target.value)}>
          {countries.map((element, key) => (
            <MenuItem key={key} value={element}>
              {element.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {country && (
        <>
          <br />
          <FormControl sx={{ marginTop: 1 }} fullWidth>
            <InputLabel id='demo-simple-select-label'>City</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={city}
              label='City'
              size='small'
              onChange={(e) => setCity(e.target.value)}>
              {cities.map((element, key) => (
                <MenuItem key={key} value={element}>
                  {element.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}
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
