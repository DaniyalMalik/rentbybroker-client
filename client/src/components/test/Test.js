import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Chip,
  Select,
  FormControl,
  InputLabel,
  OutlinedInput,
  MenuItem,
  Button,
  TextField,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

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

export default function MultipleSelectChip() {
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

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '80%',
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
          label='Add more'
          size='small'
          color='primary'
          onClick={addNewFacility1}
          startIcon={<AddIcon />}>
          Add more
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '80%',
        }}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id='demo-multiple-chip-label'>Toys and extras</InputLabel>
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
          value={newFacility1}
          onChange={handleNewFacility2}
        />
        <Button
          variant='contained'
          label='Add more'
          size='small'
          color='primary'
          onClick={addNewFacility2}
          startIcon={<AddIcon />}>
          Add more
        </Button>
      </Box>
    </>
  );
}
