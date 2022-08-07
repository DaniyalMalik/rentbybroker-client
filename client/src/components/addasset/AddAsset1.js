import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  OutlinedInput,
} from '@mui/material';
import { SaveAlt as SaveAltIcon } from '@mui/icons-material';
import { Country, City } from 'country-state-city';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AddAsset1() {
  const theme = useTheme();
  const [boatType, setBoatType] = React.useState('Power');
  const [country, setCountry] = React.useState('');
  const [countries, setCountries] = React.useState([]);
  const [cities, setCities] = React.useState([]);
  const [preDefinedCities, setPreDefinedCities] = React.useState([]);

  React.useEffect(() => {
    setCountries(Country.getAllCountries());

    // https://github.com/harpreetkhalsagtbit/country-state-city
    // https://npm.io/package/country-state-city
  }, []);

  React.useEffect(() => {
    if (country) setPreDefinedCities(City.getCitiesOfCountry(country.isoCode));
  }, [country]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCities(typeof value === 'string' ? value.split(',') : value);
  };

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
      <FormControl sx={{ marginTop: 1, maxWidth: '80%' }} fullWidth>
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
          <FormControl sx={{ m: 1, maxWidth: '80%' }} fullWidth>
            <InputLabel id='demo-multiple-chip-label'>Major Cities</InputLabel>
            <Select
              labelId='demo-multiple-chip-label'
              id='demo-multiple-chip'
              multiple
              value={cities}
              size='small'
              onChange={handleChange}
              input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value, key) => (
                    <Chip key={key} label={value.name} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}>
              {preDefinedCities.map((element, key) => (
                <MenuItem
                  key={key}
                  value={element}
                  style={getStyles(element, cities, theme)}>
                  {element.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}
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
