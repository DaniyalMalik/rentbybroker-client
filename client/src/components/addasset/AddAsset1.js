import * as React from 'react';
import {
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { SaveAlt as SaveAltIcon } from '@mui/icons-material';
import { Country, State, City } from 'country-state-city';

export default function AddAsset1() {
  const [boatType, setBoatType] = React.useState('Power');

  React.useEffect(() => {
    console.log(Country.getAllCountries(), 'Country.getAllCountries()');
    console.log(State.getStatesOfCountry(), 'State.getStatesOfCountry()');
    console.log(City.getCitiesOfState(), 'City.getCitiesOfState()');
    // https://github.com/harpreetkhalsagtbit/country-state-city
    // https://npm.io/package/country-state-city
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        // height: '90vh',
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <TextField
        label='Make'
        fullWidth
        sx={{ maxWidth: '80%' }}
        margin='normal'
        variant='outlined'
        size='small'
      />
      <TextField
        label='Model'
        fullWidth
        sx={{ maxWidth: '80%' }}
        type='number'
        margin='normal'
        variant='outlined'
        size='small'
      />
      <FormControl sx={{ marginTop: 1, maxWidth: '80%' }} fullWidth>
        <InputLabel id='demo-simple-select-label'>Type</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={boatType}
          label='Type'
          size='small'
          onChange={(e) => setBoatType(e.target.value)}>
          <MenuItem key={1} value='Power'>
            Power
          </MenuItem>
          <MenuItem key={2} value='Sail'>
            Sail
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        label='Length'
        fullWidth
        sx={{ maxWidth: '80%' }}
        type='number'
        margin='normal'
        variant='outlined'
        size='small'
      />
      <TextField
        label='Year'
        type='number'
        margin='normal'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='Name'
        margin='normal'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='Major Cities'
        margin='normal'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='Pick Up Point'
        margin='normal'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='Drop Off Point'
        margin='normal'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='Booking Number'
        margin='normal'
        type='number'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <br />
      <Button
        variant='contained'
        sx={{ maxWidth: '80%' }}
        fullWidth
        size='small'
        endIcon={<SaveAltIcon />}>
        Save
      </Button>
    </Box>
  );
}
