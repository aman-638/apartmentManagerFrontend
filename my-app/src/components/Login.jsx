import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import axios from 'axios';

const Login = () => {
    let apartment_login=JSON.parse(localStorage.getItem("apartment_login"))||false;
    const navigate=useNavigate();
    const [formData,setFormData] = useState({
        email:"",
        password:"",
    });
    const handleChange = (e) => {
        let {id,value,checked,type} = e.target;
        value = type ==="checkbox" ? checked :value;
        setFormData({
            ...formData,[id]:value
        })
    }
    const submitForm = (e) => {
        e.preventDefault();
        axios.post("https://apartmentflat-manager.herokuapp.com/login",formData).then((res) => {
            alert("user login successfully");
            apartment_login=true
            localStorage.setItem("apartment_login",JSON.stringify(apartment_login));
        }).then(() =>{
             navigate('/');
        }).catch((err) => {
            alert("wrong email or password");
        })
    }
  return (
    <div className='center'>
       <form className='form' onSubmit={submitForm}>
           <input id='email' type="email" placeholder='email' onChange={handleChange} /><br></br><br></br>
           <input id='password' type="password" placeholder='password' onChange={handleChange} /><br></br><br></br>
           <input type="submit" value="Login" />
       </form>
    </div>
  )
}

export default Login