import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../App.css'
import {Link} from 'react-router-dom'

const Home = () => {
    let apartment_login=JSON.parse(localStorage.getItem("apartment_login"))||false;
    const [list,setList] = useState([]);
    const [page,setPage] = useState("");
    useEffect(() => {
        axios.get(`https://apartmentflat-manager.herokuapp.com/flat`).then((res) => {
            setList(res.data.flat);
            setPage(res.data.totalPages);
        }) 
   },[])
  if(apartment_login===true){
    return (
        <div>

            <div className='navbar'>
                <input type="text" placeholder='Search by  block' onChange={(e) => {
                    if(e.target.value>="A"&&e.target.value<="C"){
                        axios.get(`https://apartmentflat-manager.herokuapp.com/flat/block?block=${e.target.value}&size=3`).then((res) => {
                            setList(res.data.flat);
                            setPage(res.data.totalPages);
                        })
                    }
                }} />
            </div>
    
          <div className='navbar'>
          <select name="" id="" onChange={(e) => {
                    if(e.target.value==="all"){
                        axios.get(`https://apartmentflat-manager.herokuapp.com/flat`).then((res) => {
                        setList(res.data.flat);
                        setPage(res.data.totalPages);
                    })}
                    else{
                        axios.get(`https://apartmentflat-manager.herokuapp.com/flat/filter_flat?flat_type=${e.target.value}`).then((res) => {
                        setList(res.data.flat);
                        setPage(res.data.totalPages);
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
    
           <div className='flat_data'>
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
            
            <div className='pages'>
                <input type="text" placeholder='Enter Page No.' onChange={(e) => {
                    if(e.target.value>0&&e.target.value<=page){
                    axios.get(`https://apartmentflat-manager.herokuapp.com/flat?page=${e.target.value}&size=3`).then((res) => {
                     setList(res.data.flat);
                     setPage(res.data.totalPages);
                    })
                    }
                }}/>
                <p>totalPages:{page}</p>
            </div>
        </div>
      )
  }else{
      return (
          <div className='center'>
              <h4>Please Login to access flat</h4>
          </div>
      )
  }
}

export default Home