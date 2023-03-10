import React from 'react'
import Login from './pages/Login';
import Register from './pages/Register';
import { Route } from 'react-router-dom';
import {  Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard/index'
const App=()=>{
  return(
<>  
    <Routes>
    <Route path="/" element ={<Login />}/>
    <Route path="/Register" element ={<Register/>}/>
    <Route path="/board" element ={<Dashboard/>}/>
    <Route path="/google" element ={<Google/>}/>
    </Routes>
</>
  )   
}

export default App;