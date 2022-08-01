import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
  Stack,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Typography,
  Fab,
} from '@mui/material';
import { stepConnectorClasses } from '@mui/material/StepConnector';
import {
  ArrowBackIos as ArrowBackIosIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  Check as CheckIcon,
  Filter1 as Filter1Icon,
  Filter2 as Filter2Icon,
  Filter3 as Filter3Icon,
  Filter4 as Filter4Icon,
} from '@mui/icons-material';
import AddAsset1 from './AddAsset1';
import AddAsset2 from './AddAsset2';
import AddAsset3 from './AddAsset3';
import AddAsset4 from './AddAsset4';

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <CheckIcon className='QontoStepIcon-completedIcon' />
      ) : (
        <div className='QontoStepIcon-circle' />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <Filter1Icon />,
    2: <Filter2Icon />,
    3: <Filter3Icon />,
    4: <Filter4Icon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  'Asset Details-1',
  'Asset Details-2',
  'Asset Details-3',
  'Asset Details-4',
];

export default function Index() {
  const [order, setOrder] = React.useState(0);

  const handlePrevious = () => {
    setOrder((prev) => prev - 1);
  };

  const handleNext = () => {
    setOrder((prev) => prev + 1);
  };

  return (
    <>
      <Typography variant='h3' color='primary' sx={{ textAlign: 'center' }}>
        List An Asset
      </Typography>
      <br />
      <Stack sx={{ width: '100%' }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={order}
          connector={<ColorlibConnector />}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      {order === 0 ? (
        <AddAsset1 />
      ) : order === 1 ? (
        <AddAsset2 />
      ) : order === 2 ? (
        <AddAsset3 />
      ) : (
        <AddAsset4 />
      )}
      <br />
      <br />
      <Fab
        size='small'
        onClick={handlePrevious}
        disabled={order === 0}
        color='primary'
        sx={{ float: 'left', margin: '10px' }}
        aria-label='edit'>
        <ArrowBackIosIcon />
      </Fab>
      <Fab
        sx={{ float: 'right', margin: '10px' }}
        disabled={order === 3}
        color='primary'
        onClick={handleNext}
        size='small'
        aria-label='edit'>
        <ArrowForwardIosIcon />
      </Fab>
    </>
  );
}
