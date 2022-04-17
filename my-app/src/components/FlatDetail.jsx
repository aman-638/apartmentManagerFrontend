import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import '../App.css'

const FlatDetail = () => {
    let {id} = useParams();
    const [list,setList] = useState([]);
    useEffect(() => {
        axios.get(`https://apartmentflat-manager.herokuapp.com/flat/${id}`).then((res) => {
            setList(res.data.residents);
        }) 
   },[])
  return (
    <div>
        <table className='table table-bordered text-center'>
         <thead>
             <tr>
                 <th>Name</th>
                 <th>Gender</th>
                 <th>Age</th>
             </tr>
         </thead>
         <tbody>
         {list.map((data,index) => (  
                  <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.gender}</td>
                      <td>{data.age}</td>
                  </tr>
         ))}
         </tbody>
      </table>
    </div>
  )
}

export default FlatDetail