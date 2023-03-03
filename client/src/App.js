import React from 'react'
import Login from './pages/Login';
import Register from './pages/Register';
import { Route } from 'react-router-dom';
import {  Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard'
const App=()=>{
  return(
<> 
    <Routes>
    <Route path="/" element ={<Login />}/>
    <Route path="/Register" element ={<Register/>}/>
    <Route path="/board" element ={<Dashboard/>}/>
    </Routes>
</>
  )
}

export default App;