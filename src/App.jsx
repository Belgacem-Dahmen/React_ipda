
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout"
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword'
import AuthLayout from './layouts/AuthLayout';
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<ForgotPassword />} />
       </Route>

       <Route path="/dashboard" element={<AuthLayout />}>
        <Route path="users" element={<Login />} />
        <Route path="demandes" element={<Register />} />
        <Route path="services" element={<ForgotPassword />} />
       </Route>
    </Routes>

  </BrowserRouter>
    )
}

export default App
