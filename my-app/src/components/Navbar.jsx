import React, { useState} from 'react'
import { Link} from 'react-router-dom'
import '../App.css'

const Navbar = () => {
    const [rerender, setRerender] = useState(false);
    
   let apartment_login=JSON.parse(localStorage.getItem("apartment_login"))||false;
   if(apartment_login||rerender){
    return (
        <div className='navbar'>
            <Link to='/'>Home</Link>
            <button onClick={() => {
               apartment_login=false;
               localStorage.setItem("apartment_login",JSON.stringify(apartment_login)); 
               alert("logout success")
               setRerender(!rerender); 
            }}>LogOut</button>
            <Link to="/register">Register</Link>
        </div>
      )
   }else{
       return (
        <div className='navbar'>
        <Link to='/'>Home</Link>
       <Link to='/login' onClick={()=>{
           setRerender(!rerender);
       }}>LogIn</Link>
       <Link to="/register">Register</Link>
      </div> 
       )
   }
}

export default Navbar