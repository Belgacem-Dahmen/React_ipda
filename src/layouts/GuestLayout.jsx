
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function GuestLayout() {
  

    return (
       
        <div className="bg-white">
           
        <Header isAuth={true}/>
        <Outlet />
        
        </div>
        
    )
  }
  
  export default GuestLayout