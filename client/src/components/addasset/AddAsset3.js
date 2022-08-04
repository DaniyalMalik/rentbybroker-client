import * as React from 'react';
import {
  Button,
  TextField,
  Box,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Typography,
  Fab,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from '@mui/material';
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Update as UpdateIcon,
  Upload as UploadIcon,
  Close as CloseIcon,
  SaveAlt as SaveAltIcon,
} from '@mui/icons-material';
import ImageUploading from 'react-images-uploading';

export default function AddAsset3() {
  const [images, setImages] = React.useState([]);
  const [captainInfoCount, setCaptainInfoCount] = React.useState(1);
  const [crewCount, setCrewCount] = React.useState(1);
  const [hourLimit, setHourLimit] = React.useState(12);
  const [diffPricing, setDiffPricing] = React.useState(false);
  const [inclPricing, setInclPricing] = React.useState(true);
  const [termRate, setTermRate] = React.useState(false);
  const [numberOfWholeSaleDays, setNumberOfWholeSaleDays] = React.useState(0);
  const [capInfo, setCapInfo] = React.useState([
    <>
      <Typography variant='h6' color='primary'>
        Captain-{captainInfoCount}
      </Typography>
      {/* <Box
        sx={{
          border: '2px solid #1976d2',
          width: '75%',
          borderRadius: '8px',
          padding: '20px',
        }}> */}
      <TextField
        label='First Name'
        margin='normal'
        sx={{ maxWidth: '90%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='Last Name'
        margin='normal'
        sx={{ maxWidth: '90%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='#'
        margin='normal'
        sx={{ maxWidth: '90%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='@'
        margin='normal'
        sx={{ maxWidth: '90%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      {/* </Box> */}
    </>,
  ]);
  const [crewMembers, setCrewMembers] = React.useState([
    <>
      <br />
      <br />
      <Typography variant='h6' color='primary'>
        Crew Member-{crewCount}
      </Typography>
      {/* <Box
        sx={{
          border: '2px solid #1976d2',
          width: '75%',
          borderRadius: '8px',
          padding: '20px',
        }}> */}
      <TextField
        label='Crew Member'
        margin='normal'
        sx={{ maxWidth: '90%' }}
        fullWidth
        variant='outlined'
        size='small'
      />
      <TextField
        label='Fees'
        margin='normal'
        sx={{ maxWidth: '90%' }}
        fullWidth
        type='number'
        variant='outlined'
        size='small'
      />
      {/* </Box> */}
    </>,
  ]);

  const handleAddCaptainInfoForm = () => {
    setCaptainInfoCount((prev) => prev + 1);
    setCapInfo((prev) =>
      prev.concat(
        <>
          <br />
          <br />
          <Typography variant='h6' color='primary'>
            Captain-{captainInfoCount + 1}
          </Typography>
          {/* <Box
            sx={{
              border: '2px solid #1976d2',
              minWidth: '100%',
              borderRadius: '8px',
              padding: '20px',
            }}> */}
          <TextField
            label='First Name'
            margin='normal'
            sx={{ maxWidth: '90%' }}
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            label='Last Name'
            margin='normal'
            sx={{ maxWidth: '90%' }}
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            label='#'
            margin='normal'
            sx={{ maxWidth: '90%' }}
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            label='@'
            margin='normal'
            sx={{ maxWidth: '90%' }}
            fullWidth
            variant='outlined'
            size='small'
          />
          {/* </Box> */}
        </>,
      ),
    );
  };

  const handleAddCrewForm = () => {
    setCrewCount((prev) => prev + 1);
    setCrewMembers((prev) =>
      prev.concat(
        <>
          <br />
          <br />
          <Typography variant='h6' color='primary'>
            Crew Member-{crewCount + 1}
          </Typography>
          {/* <Box
        sx={{
          border: '2px solid #1976d2',
          width: '75%',
          borderRadius: '8px',
          padding: '20px',
        }}> */}
          <TextField
            label='Crew Member'
            margin='normal'
            sx={{ maxWidth: '90%' }}
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            label='Fees'
            margin='normal'
            sx={{ maxWidth: '90%' }}
            fullWidth
            type='number'
            variant='outlined'
            size='small'
          />
          {/* </Box> */}
        </>,
      ),
    );
  };

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleRemoveCaptainInfoForm = () => {
    const val = [...capInfo];

    val.pop();

    setCaptainInfoCount((prev) => prev - 1);
    setCapInfo(val);
  };

  const handleRemoveCrewForm = () => {
    const val = [...crewMembers];

    val.pop();

    setCrewCount((prev) => prev - 1);
    setCrewMembers(val);
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
      <Typography
        variant='h6'
        color='primary'
        sx={{ textAlign: 'start', width: '80%' }}>
        Upload Pictures
      </Typography>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        // maxNumber={maxNumber}
        dataURLKey='data_url'
        acceptType={['jpg']}>
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <Box
            className='upload__image-wrapper'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Box>
              <Button
                variant='contained'
                size='small'
                sx={isDragging ? { color: 'red' } : null}
                startIcon={<UploadIcon />}
                onClick={onImageUpload}
                {...dragProps}>
                Upload
              </Button>
              &nbsp;
              <Button
                size='small'
                startIcon={<CloseIcon />}
                variant='contained'
                disabled={images.length === 0}
                onClick={onImageRemoveAll}>
                Remove all
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                overflowX: 'auto',
                overflowY: 'auto',
                maxWidth: '80%',
              }}>
              {imageList.map((image, index) => (
                <Box key={index} className='image-item' sx={{ margin: '10px' }}>
                  <img src={image.data_url} alt='' width='100' />
                  <Box className='image-item__btn-wrapper'>
                    <Fab
                      color='primary'
                      sx={{ margin: '5px' }}
                      onClick={() => onImageUpdate(index)}
                      size='small'>
                      <UpdateIcon />
                    </Fab>
                    <Fab
                      sx={{ margin: '5px' }}
                      color='primary'
                      onClick={() => onImageRemove(index)}
                      size='small'>
                      <RemoveIcon />
                    </Fab>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </ImageUploading>
      <br />
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
      <FormControlLabel
        control={<Checkbox checked={termRate} />}
        onClick={() => setTermRate((prev) => !prev)}
        label='Do you offer term charters or only hourly?'
      />
      <br />
      <FormControlLabel
        control={<Checkbox checked={diffPricing} />}
        onClick={() => setDiffPricing((prev) => !prev)}
        label='Do you have different pricing each day or is it the same?'
      />
      <br />
      {diffPricing && (
        <>
          <Typography variant='h6' color='primary'>
            Price for each day
          </Typography>
          <TextField
            label='Sunday'
            margin='normal'
            type='number'
            sx={{ maxWidth: '80%' }}
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            label='Monday'
            margin='normal'
            type='number'
            sx={{ maxWidth: '80%' }}
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            label='Tuesday'
            margin='normal'
            type='number'
            sx={{ maxWidth: '80%' }}
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            label='Wednesday'
            margin='normal'
            type='number'
            sx={{ maxWidth: '80%' }}
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            label='Thursday'
            margin='normal'
            type='number'
            sx={{ maxWidth: '80%' }}
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            label='Friday'
            margin='normal'
            type='number'
            sx={{ maxWidth: '80%' }}
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            label='Saturday'
            margin='normal'
            type='number'
            sx={{ maxWidth: '80%' }}
            fullWidth
            variant='outlined'
            size='small'
          />
        </>
      )}
      <br />
      <FormControl sx={{ maxWidth: '80%' }} fullWidth>
        <InputLabel id='demo-simple-select-label'>
          Minimum Booking Hour Limit
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          size='small'
          value={hourLimit}
          label='Minimum Booking Hour Limit'
          onChange={(e) => setHourLimit(e.target.value)}>
          <MenuItem key={1} value={1}>
            1
          </MenuItem>
          <MenuItem key={2} value={2}>
            2
          </MenuItem>
          <MenuItem key={3} value={3}>
            3
          </MenuItem>
          <MenuItem key={4} value={4}>
            4
          </MenuItem>
          <MenuItem key={5} value={5}>
            5
          </MenuItem>
          <MenuItem key={6} value={6}>
            6
          </MenuItem>
          <MenuItem key={7} value={7}>
            7
          </MenuItem>
          <MenuItem key={8} value={8}>
            8
          </MenuItem>
          <MenuItem key={9} value={9}>
            9
          </MenuItem>
          <MenuItem key={10} value={10}>
            10
          </MenuItem>
          <MenuItem key={11} value={11}>
            11
          </MenuItem>
          <MenuItem key={12} value={12}>
            12
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        label='Marina Pick-Up Fees'
        margin='normal'
        sx={{ maxWidth: '80%' }}
        fullWidth
        type='number'
        variant='outlined'
        size='small'
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minWidth: '80%',
        }}>
        <Typography variant='h6' color='primary'>
          Add a Fee
        </Typography>
        <Box>
          <TextField
            label='What is the fee for?'
            margin='normal'
            sx={{ maxWidth: '80%' }}
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            label='Amount'
            margin='normal'
            sx={{ maxWidth: '80%' }}
            fullWidth
            type='number'
            variant='outlined'
            size='small'
          />
        </Box>
      </Box>
      <FormControlLabel
        control={<Checkbox checked={inclPricing} />}
        onClick={() => setInclPricing((prev) => !prev)}
        label='Does this pricing include Fuel, Captain, Crew, and Gratuity?'
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minWidth: '80%',
        }}>
        <Typography variant='h6' color='primary'>
          Crew Members
        </Typography>
        <Box>
          <Fab
            sx={{ margin: '10px' }}
            disabled={inclPricing}
            color='primary'
            onClick={handleAddCrewForm}
            size='small'>
            <AddIcon />
          </Fab>
          <Fab
            sx={{ margin: '10px' }}
            color='primary'
            disabled={crewCount === 1}
            onClick={handleRemoveCrewForm}
            size='small'>
            <RemoveIcon />
          </Fab>
        </Box>
      </Box>
      <Box
        sx={{
          border: '2px solid #1976d2',
          width: '75%',
          borderRadius: '8px',
          padding: '20px',
        }}>
        <TextField
          label='Captain Hourly Rate'
          margin='normal'
          sx={{ maxWidth: '80%' }}
          fullWidth
          type='number'
          variant='outlined'
          size='small'
        />
        {!inclPricing && crewMembers}
      </Box>
      <br />
      {termRate && (
        <>
          <Typography variant='h6' color='primary'>
            Wholesale Term rate
          </Typography>
          <Box
            sx={{
              border: '2px solid #1976d2',
              width: '75%',
              borderRadius: '8px',
              padding: '20px',
            }}>
            <FormControl sx={{ maxWidth: '80%' }} fullWidth>
              <InputLabel id='demo-simple-select-label'>Days</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                size='small'
                value={numberOfWholeSaleDays}
                label='Days'
                onChange={(e) => setNumberOfWholeSaleDays(e.target.value)}>
                <MenuItem key={1} value={1}>
                  1
                </MenuItem>
                <MenuItem key={2} value={2}>
                  2
                </MenuItem>
                <MenuItem key={3} value={3}>
                  3
                </MenuItem>
                <MenuItem key={4} value={4}>
                  4
                </MenuItem>
                <MenuItem key={5} value={5}>
                  5
                </MenuItem>
                <MenuItem key={6} value={6}>
                  6
                </MenuItem>
                <MenuItem key={7} value={7}>
                  7
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              label='Amount'
              margin='normal'
              sx={{ maxWidth: '80%' }}
              name='wholeSaleRate'
              fullWidth
              type='number'
              variant='outlined'
              size='small'
            />
          </Box>
        </>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minWidth: '80%',
        }}>
        <Typography variant='h6' color='primary'>
          Captain Information
        </Typography>
        <Box>
          <Fab
            sx={{ margin: '10px' }}
            color='primary'
            onClick={handleAddCaptainInfoForm}
            size='small'>
            <AddIcon />
          </Fab>
          <Fab
            sx={{ margin: '10px' }}
            color='primary'
            disabled={captainInfoCount === 1}
            onClick={handleRemoveCaptainInfoForm}
            size='small'>
            <RemoveIcon />
          </Fab>
        </Box>
      </Box>
      <Box
        sx={{
          border: '2px solid #1976d2',
          width: '75%',
          borderRadius: '8px',
          padding: '20px',
        }}>
        {capInfo}
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
