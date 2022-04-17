import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div className='navbar'>
         <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to="/register">Register</Link>
    </div>
  )
}

export default Navbar