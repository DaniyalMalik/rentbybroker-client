import * as React from 'react';
import { Button, TextField, Box } from '@mui/material';
import { Publish as PublishIcon } from '@mui/icons-material';

export default function AddAsset4() {
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
        sx={{ maxWidth: '80%' }}
        margin='normal'
        fullWidth
        type='file'
        helperText='Upload Document'
        variant='outlined'
        size='small'
      />
      <br />
      <Button
        variant='contained'
        sx={{ maxWidth: '80%' }}
        fullWidth
        size='small'
        endIcon={<PublishIcon />}>
        Submit
      </Button>
    </Box>
  );
}
