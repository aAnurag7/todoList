import React from 'react'
import { useState } from 'react'
import '../styles/register.css'


const Register=()=>{
  const [fullname, setFullname]=useState("")
  const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")


    const checkforregistration = () =>{
        let values = {fullname:fullname,email: email, password: password};
        fetch(`localhost:5000/register`,{
            method: 'post',
            headers: 'content-application/json',
            body: JSON.stringify(values)
        }).then((res)=>{
            if(res== 200){
                console.log('register succesfuly')
                window.location = '/Login'
            }
            else{
                alert(`${res.status}`)
            }
        })
      }
  return(
    <>
    <div className='main1'>
        <div className='form1'> 
            <h2>Sign up Here</h2>
            <input value = {email} onChange={(e)=>setFullname(e.target.value)} type="text" name="fullname" placeholder="Enter Name Here"/>
            <input value = {fullname} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="Enter Email Here"/>
            <input value = {password} onChange={(e)=>setPassword(e.target.value)} type="password" name="" placeholder="Enter Password Here"/>
            <button className="btnn" onClick={checkforregistration}>Register</button>
            <p className="link"><a href="/">back</a></p>
        </div>
    </div>
     
    </>
  )
}

export default Register;