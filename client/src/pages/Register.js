
import React from 'react'
import { useState} from 'react'
import '../styles/register.css'

const Register=()=>{
  const [fullname, setFullname]=useState("")
  const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const checkforregistration = async () =>{
   
        let values = {fullname:fullname,email: email, password: password};
        values = JSON.stringify(values);
    fetch('/create/user',{
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
                if(res.status===409)
                alert(`${res.status} user already exist`)
            }
        })
      }
      const validate = (e) => {
        e.preventDefault();
        const errors = {};
        const regexpass=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        const regex = /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
        if (!fullname) {
          errors.fullname = "Username is required!";
          alert("Username is required!")
        }
       else if (!email) {
          errors.email = "Email is required!";
          alert("Email is required!")
        } else if (!regex.test(email)) {
          errors.email = "This is not a valid email format!";
          alert("This is not a valid email format!")
        }
       else if (!password) {
          errors.password = "Password is required";
          alert("Password is required")
        }else if(!regexpass.test(password))
        {
          errors.password="password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters!";
          alert("password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters!")
        }
      if(!errors.fullname && !errors.email && !errors.password){
        checkforregistration();
      }
      };
  return(
    <>
    <div className='main1'>
        <div className='form1'> 
            <h2>Sign up Here</h2>
            <input value = {fullname} onChange={(e)=>setFullname(e.target.value)} type="text" name="fullname" placeholder="Name "/>
            <input value = {email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="Email "/>
            <input value = {password} onChange={(e)=>setPassword(e.target.value)} type="password" name="" placeholder="Password"/>
            <button className="btnn" onClick={validate}>Register</button>
            <p className="link"><a href="/">back</a></p>
        </div>
      </div>
    </>
  );
};
export default Register;
