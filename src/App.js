import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import Register from './components/auth/Register';
import { Index as NavBar } from './components/header/Index';
import Dashboard from './components/home/Dashboard';
import Settings from './components/settings/Settings';
import NotFound from './components/pages/NotFound';
import Test from './components/utilities/Test';
import Contact from './components/pages/Contact';
import Index from './components/addasset/Index';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        // light: '#757ce8',
        main: '#1a237e',
        // dark: '#002884',
        contrastText: '#fff',
      },
    },
  });

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Box sx={{ marginTop: '50px' }}>
            <Routes>
              <Route path='/' element={<NavBar />}>
                <Route path='/' element={<Dashboard />} />
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
                <Route path='forgotpassword' element={<ForgotPassword />} />
                <Route path='resetpassword' element={<ResetPassword />} />
                <Route path='addasset' element={<Index />} />
                <Route path='settings' element={<Settings />} />
                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
              </Route>
              <Route path='/test' element={<Test />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </Router>
    </>
  );
}
