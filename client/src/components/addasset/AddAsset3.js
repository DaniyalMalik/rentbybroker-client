import * as React from 'react';
import {
  Button,
  TextField,
  Box,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

export default function AddAsset3() {
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
        label='Title'
        fullWidth
        sx={{ maxWidth: '80%' }}
        margin='normal'
        variant='outlined'
        size='small'
      />
      <TextField
        label='Description'
        fullWidth
        multiline
        minRows={5}
        sx={{ maxWidth: '80%' }}
        margin='normal'
        variant='outlined'
        size='small'
      />
      <TextField
        label='pictures'
        fullWidth
        sx={{ maxWidth: '80%' }}
        margin='normal'
        variant='outlined'
        size='small'
      />
      <FormGroup>
        <FormLabel component='legend'>Availablity</FormLabel>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label='Sunday'
        />
        <FormControlLabel control={<Checkbox />} label='Monday' />
        <FormControlLabel control={<Checkbox />} label='Tuesday' />
        <FormControlLabel control={<Checkbox />} label='Wednesday' />
        <FormControlLabel control={<Checkbox />} label='Thursday' />
        <FormControlLabel control={<Checkbox />} label='Friday' />
        <FormControlLabel control={<Checkbox />} label='Saturday' />
      </FormGroup>
      <TextField
        label='pricing (pricing type, rate in city, rate of different days)'
        margin='normal'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='Minimum Booking Hour Limit'
        margin='normal'
        type='number'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='crew members'
        margin='normal'
        type='number'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='Fees'
        margin='normal'
        type='number'
        sx={{ maxWidth: '80%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='captain information'
        margin='normal'
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
        endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  );
}
