import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import ChangePassword from './components/auth/ChangePassword';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import Register from './components/auth/Register';
import NavBar from './components/header/NavBar';
import Dashboard from './components/home/Dashboard';
import Settings from './components/settings/Settings';
import Test from './components/test/Test';
import { Box } from '@mui/material';

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Box sx={{ marginTop: '50px' }}>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard/settings' element={<Settings />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/changepassword' element={<ChangePassword />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/test' element={<Test />} />
          </Routes>
        </Box>
      </Router>
    </>
  );
}
