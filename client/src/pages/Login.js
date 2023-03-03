import React from 'react'
import { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import '../styles/login.css'

const Login=()=>{
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")


    const check = () =>{
        let values = {email: email, password: password};
        fetch(`localhost:5000/usercheck `,{
            method: 'post',
            headers: 'content-application/json',
            body: JSON.stringify(values)
        }).then((res)=>{
            if(res== 200){
                console.log('login succesfuly')
                window.location = '/board'
            }
            else{
                alert(`${res.status}`)
            }
        })
    }
  return(
    <>
   <div class="main">
        <div class="navbar">
            <div class="icon">
                <h2 id="title"class="logo">Todo</h2>
            </div>
        </div> 
       <div class="content">
            <h1>Welcome to do  <br/><span>task</span> <br/></h1>
            <p class="par"> Todo involves creating a tool for
                managing tasks and increasing productivity & <br/>
                To create a user-friendly and intuitive interface for users to
                create, organize,<br/> and prioritize tasks in order to stay on top of their
                workload and meet their goals.</p>
                
              <div class="form"> 
                    <h2>Login Here</h2>
                    <input type="email" name="email" value = {email} onChange={(e=>setEmail(e.target.value))} placeholder="Enter Email Here"/>
                    <input type="password" name="" value = {password} onChange={(e=>setPassword(e.target.value))} placeholder="Enter Password Here"/>
                    <button className="btnn" onClick={check}>Login</button>

                    <p class="link">Don't have an account<br/>
                    <a href="/Register">Sign up here</a></p>
                    <div class="icons">
                    <p class="liw">Log in with</p><a id="icongoogle" href="/board"><FcGoogle/></a>
                    </div>
                </div>
        </div>
    </div>
    
        </>
  )
}

export default Login