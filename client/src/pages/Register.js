import React from 'react'
import { useState } from 'react'
import '../styles/register.css'


const Register=()=>{
  const [fullname, setFullname]=useState("")
  const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")


    const checkforregistration = async (e) =>{
        e.preventDefault();
        let values = {fullname:fullname,email: email, password: password};
        values = JSON.stringify(values);
    fetch('http://localhost:5000/create/user',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials":true,
              "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
              "Access-Control-Max-Age": 86400,
            },
            body: values
        }).then((res)=>{
          console.log(res.status)
            if(res.status === 201){
                console.log('register succesfuly')
                window.location = '/'
            }
            else{
                console.log(res.status)
                alert(`${res.status}`)
                // window.location = '/'
            }
        })
      }
  return(
    <>
    <div className='main1'>
        <div className='form1'> 
            <h2>Sign up Here</h2>
            <input value = {fullname} onChange={(e)=>setFullname(e.target.value)} type="text" name="fullname" placeholder="Name "/>
            <input value = {email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="Email "/>
            <input value = {password} onChange={(e)=>setPassword(e.target.value)} type="password" name="" placeholder="Password"/>
            <button className="btnn" onClick={checkforregistration}>Register</button>
            <p className="link"><a href="/">back</a></p>
        </div>
    </div>
     
    </>
  )
}

export default Register;