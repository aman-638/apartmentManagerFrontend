import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../App.css'
import {Link} from 'react-router-dom'

const Home = () => {
    const [list,setList] = useState([]);
    useEffect(() => {
        axios.get(`https://apartmentflat-manager.herokuapp.com/flat?size=9`).then((res) => {
            setList(res.data.flat);
        }) 
},[])
  return (
    <div>

      <div className='navbar'>
      <select name="" id="" onChange={(e) => {
                if(e.target.value==="all"){
                    axios.get(`https://apartmentflat-manager.herokuapp.com/flat?size=9`).then((res) => {
                    setList(res.data.flat);
                })}
                else{
                    axios.get(`https://apartmentflat-manager.herokuapp.com/flat/filter_flat?flat_type=${e.target.value}`).then((res) => {
                    setList(res.data.flat);
                  })
                }
        
        }}>
            <option value="">filter by flat type</option>
            <option value="all">Both</option>
            <option value="owner">Owner</option>
            <option value="tenant">Tenant</option>
        </select>
        <button onClick={() => {
           let sortasc = [...list].sort((a,b) => (a.flat_no-b.flat_no));
           setList(sortasc)
        }}>sort by asc flat_no</button>
        <button onClick={() => {
           let sortdesc = [...list].sort((a,b) => (b.flat_no-a.flat_no));
           setList(sortdesc) 
        }}>sort by desc flat_no</button>
      </div>

       <div>
          {list.map((el) => (
            <Link className='flats' to={`/${el._id}`} key={el._id} >
                <div><img src={el.flat_image} alt="flat img" /></div>
                <div>
                    <h2>Flat Type:{el.flat_type}</h2>
                    <h2>Block:{el.block}</h2>
                    <h2>FlatNumber:{el.flat_no}</h2>
                    <p>Residents Live:{el.residents.length}</p>
                </div>
            </Link>
          ))} 
       </div>
    </div>
  )
}

export default Home