import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import axios from 'axios';

const Register = () => {
    const navigate=useNavigate();
    const [formData,setFormData] = useState({
        nickName:"",
        email:"",
        password:"",
        country:"",
        profileImage:""
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
        axios.post("https://apartmentflat-manager.herokuapp.com/register",formData).then((res) => {
            alert("user created successfully");
            
        }).then(() =>{
             navigate('/login');
        }).catch((err) => {
            alert("email or nickname already exists");
        })
    }
  return (
    <div>
       <form className='form' onSubmit={submitForm}>
           <input id='nickName' type="text" placeholder='nickName' onChange={handleChange}/><br></br><br></br>
           <input id='email' type="email" placeholder='email' onChange={handleChange} /><br></br><br></br>
           <input id='password' type="password" placeholder='password' onChange={handleChange} /><br></br><br></br>
           <input id='country' type="text" placeholder='Country' onChange={handleChange}/><br></br><br></br>
           <input id='profileImage' type="text" placeholder='profileImage' onChange={handleChange}/><br></br><br></br>
           <input type="submit" value="Register" />
       </form>
    </div>
  )
}

export default Register