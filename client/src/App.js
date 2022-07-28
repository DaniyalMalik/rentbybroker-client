import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AppBar from './components/header/AppBar';
import Test from './components/test/Test';

export default function App() {
  return (
    <>
      <AppBar />
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}
