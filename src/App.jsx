import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from "../src/pages/Auth/Login";
import Register from "../src/pages/Auth/Register";
import LandingPage from '../src/pages/LandingPage';
import ForgotPassword from '../src/pages/Auth/ForgotPassword'
import "../src/app.css";
import GuestLayout from './layouts/GuestLayout';


const App = () => {
  const navigate = useNavigate();


  return (
    <Routes>
    <Route path='/' element={<GuestLayout />}>
          <Route path='/' element={<LandingPage />}/>
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />}/>
          <Route path='forgot' element={<ForgotPassword />}/>
        </Route>

  </Routes>
  );
};

export default App;
