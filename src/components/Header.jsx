import logo  from "../assets/logo-ipda.png"
import {  Link } from "react-router-dom";
import { useState } from 'react';

function Header (props) {
    const auth = props.isAuth;
    const [show, setShow] = useState('false');

    return (
      
        
<div className="bg-blue-500 shadow-md">
	<nav className="relative px-4 py-4 flex justify-between items-center bg-white">
      
		<Link to={'/'} className="text-3xl font-bold leading-none" href="#">
			<img src={logo} alt="" className="w-64"/>
		</Link>
	
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
			<li><Link to={'/'} className="text-sm text-blue-800 hover:text-gray-500">Home</Link></li>
			<li><Link to={'/about'} className="text-sm text-blue-800">About Us</Link></li>
			<li><Link to={'/services'} className="text-sm text-blue-800 hover:text-gray-500" >Services</Link></li>
			<li><Link to={'/contact'} className="text-sm text-blue-800 hover:text-gray-500" >Contact</Link></li>
		</ul>
        { auth &&
        <div>
        <Link to={'login'} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" >
            Login
            </Link>
		<Link to={'register'} className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" >Sign up
        </Link> 
        </div>}
    </nav>
</div>



     
    )
  }
  
  export default Header