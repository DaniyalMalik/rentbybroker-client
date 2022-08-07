import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  Chip,
  Select,
  FormControl,
  InputLabel,
  OutlinedInput,
  MenuItem,
  Button,
  TextField,
} from '@mui/material';
import { SaveAlt as SaveAltIcon, Add as AddIcon } from '@mui/icons-material';

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

export default function AddAsset2() {
  const [fuelType, setFuelType] = React.useState('Gas');
  const theme = useTheme();
  const [definedFacilities1, setDefinedFacilities1] = React.useState([
    'Stereo',
    'Bluetooth',
    'Hydraulic Swim platform ',
  ]);
  const [definedFacilities2, setDefinedFacilities2] = React.useState([
    'Inflatable Floats',
    'Ice',
    'Bottled Waters ',
    'Jetskis ',
    'Paddleboards',
    'Dingy',
    'Wakeboard',
    'Seabobs',
    'Slide',
    'Hydrofoil',
    'Sailboat',
    'Dive Equipment',
    'Gym and workout equipment',
    'Fishing Gear',
    'Hot Tub',
    'Sauna',
    'Inflatable Trampoline',
  ]);
  const [facilities1, setfacilities1] = React.useState([]);
  const [facilities2, setfacilities2] = React.useState([]);
  const [newFacility1, setNewFacility1] = React.useState([]);
  const [newFacility2, setNewFacility2] = React.useState([]);

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setfacilities1(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setfacilities2(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleNewFacility1 = (e) => {
    setNewFacility1(e.target.value);
  };

  const addNewFacility1 = () => {
    if (newFacility1)
      setDefinedFacilities1((prev) => prev.concat(newFacility1));
  };

  const handleNewFacility2 = (e) => {
    setNewFacility2(e.target.value);
  };

  const addNewFacility2 = () => {
    if (newFacility2)
      setDefinedFacilities2((prev) => prev.concat(newFacility2));
  };

  const handleChange = (e) => {
    setFuelType(e.target.value);
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
      <FormControl sx={{ maxWidth: '80%' }} fullWidth>
        <InputLabel id='demo-simple-select-label'>Fuel Type</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={fuelType}
          label='Fuel Type'
          size='small'
          onChange={handleChange}>
          <MenuItem value='Gas'>Gas</MenuItem>
          <MenuItem value='Diesel'>Diesel</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label='Passengers Limit'
        fullWidth
        type='number'
        sx={{ maxWidth: '80%' }}
        margin='normal'
        variant='outlined'
        size='small'
      />
      <TextField
        label='Number of Bathrooms'
        fullWidth
        type='number'
        sx={{ maxWidth: '80%' }}
        margin='normal'
        variant='outlined'
        size='small'
      />
      <Typography
        sx={{ alignSelf: 'flex-start', marginLeft: '10%' }}
        variant='h6'
        color='primary'>
        Sleeping Accommodation
      </Typography>
      <Box
        sx={{
          border: '2px solid #1976d2',
          width: '75%',
          borderRadius: '8px',
          padding: '20px',
        }}>
        <TextField
          label='Queen/King Beds'
          margin='normal'
          type='number'
          sx={{ maxWidth: '90%' }}
          fullWidth
          variant='outlined'
          size='small'
        />
        <TextField
          label='Twin Beds'
          margin='normal'
          sx={{ maxWidth: '90%' }}
          type='number'
          fullWidth
          variant='outlined'
          size='small'
        />
        <TextField
          label='Number of Cabins'
          margin='normal'
          sx={{ maxWidth: '90%' }}
          type='number'
          fullWidth
          variant='outlined'
          size='small'
        />
      </Box>
      <br />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '85%',
        }}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id='demo-multiple-chip-label'>
            Electronics and Technical
          </InputLabel>
          <Select
            labelId='demo-multiple-chip-label'
            id='demo-multiple-chip'
            multiple
            value={facilities1}
            size='small'
            onChange={handleChange1}
            input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}>
            {definedFacilities1.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, facilities1, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          variant='outlined'
          size='small'
          value={newFacility1}
          onChange={handleNewFacility1}
        />
        <Button
          variant='contained'
          label='Add new'
          size='small'
          color='primary'
          onClick={addNewFacility1}
          startIcon={<AddIcon />}>
          Add new
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '85%',
        }}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id='demo-multiple-chip-label'>Toys and Extras</InputLabel>
          <Select
            labelId='demo-multiple-chip-label'
            id='demo-multiple-chip'
            multiple
            value={facilities2}
            size='small'
            onChange={handleChange2}
            input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}>
            {definedFacilities2.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, facilities1, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          variant='outlined'
          size='small'
          value={newFacility2}
          onChange={handleNewFacility2}
        />
        <Button
          variant='contained'
          label='Add new'
          size='small'
          color='primary'
          onClick={addNewFacility2}
          startIcon={<AddIcon />}>
          Add new
        </Button>
      </Box>
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
