import { Outlet } from "react-router-dom";
import Header from "../components/Header";



function AuthLayout() {
  

    return (
      <div className="bg-white">
      <Outlet />
      </div>
    )
  }
  
  export default AuthLayout