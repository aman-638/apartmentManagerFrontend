import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import FlatDetail from './components/FlatDetail';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:id' element={<FlatDetail/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
       </Routes>
    </div>
  );
}

export default App;
