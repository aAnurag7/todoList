import React from 'react'
import { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import '../styles/login.css'

const Login=()=>{
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const check = async (e) =>{
        e.preventDefault();
        let values = {email: email, password: password};
        values = JSON.stringify(values)
     let res =await fetch('http://localhost:5000/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials":true,
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
                "Access-Control-Max-Age": 86400,
            },
            body: values
        })
        let data = await res.json();
        if(res.status === 200){
            localStorage.setItem('token',JSON.stringify(data));
             window.location = '/board'
        }
        else if(res.status === 404)alert(`${res.status} user not found`)
        else if(res.status === 401)alert(`${res.status} wrong password`)
        else if(res.status === 400)alert(`${res.status} Invalid credentials`)
        else{alert(`${res.status} server error`)}
    }
  return(
    <>
   <div className="main">
        <div className="navbar">
            <div className="icon">
                <h2 id="title"className="logo">Todo</h2>
            </div>
        </div> 
       <div className="content">
            <h1>Welcome to do  <br/><span>task</span> <br/></h1>
            <p className="par"> Todo involves creating a tool for
                managing tasks and increasing productivity & <br/>
                To create a user-friendly and intuitive interface for users to
                create, organize,<br/> and prioritize tasks in order to stay on top of their
                workload and meet their goals.</p>
                
              <div className="form"> 
                    <h2>Login Here</h2>
                    <input type="email" name="email" value = {email} onChange={(e=>setEmail(e.target.value))} placeholder="Email "/>
                    <input type="password" name="" value = {password} onChange={(e=>setPassword(e.target.value))} placeholder="Password"/>
                    <button className="btnn" onClick={check}>Login</button>

                    <p className="link">Don't have an account<br/>
                    <a href="/Register">Sign up here</a></p>
                    <div className="icons">
                    <p className="liw">Log in with</p><a id="icongoogle" href="/google"><FcGoogle/></a>
                    </div>
                </div>
        </div>
    </div>
    
        </>
  )
}

export default Login