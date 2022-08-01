import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import Register from './components/auth/Register';
import NavBar from './components/header/NavBar';
import Dashboard from './components/home/Dashboard';
import Settings from './components/settings/Settings';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import Contact from './components/pages/Contact';
import Index from './components/addasset/Index';
import { Box } from '@mui/material';

export default function App() {
  return (
    <>
      <Router>
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
            </Route>
            <Route path='/test' element={<Test />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Box>
      </Router>
    </>
  );
}
