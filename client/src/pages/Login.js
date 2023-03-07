import React from 'react'
import { useState ,useEffect} from 'react'
import {FcGoogle} from 'react-icons/fc'
import '../styles/login.css'

const Login=()=>{

    const initialValues = { email: "", password: "" };
        const [formValues, setFormValues] = useState(initialValues);
        const [formErrors, setFormErrors] = useState({});
        const [isSubmit, setIsSubmit] = useState(false);
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormValues({ ...formValues, [name]: value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          setFormErrors(validate(formValues));
          check();
          setIsSubmit(true);
        };
      
        useEffect(() => {
          console.log(formErrors);
          if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
          }
        }, [formErrors, formValues, isSubmit]);
    // const [email, setEmail]=useState("")
    // const [password, setPassword]=useState("")

    

    const check = async (e) =>{
        e.preventDefault();
        // eslint-disable-next-line no-undef
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
        else{alert(`${res.status} server error`)}
    }

    const validate = (values) => {
        const errors = {};        
        if (!values.email) {
          errors.email = "Email is required!";
        } 
        if (!values.password) {
          errors.password = "Password is required";
        }
        // } else if (values.password.length < 4) {
        //   errors.password = "Password must be more than 4 characters";
        // } else if (values.password.length > 10) {
        //   errors.password = "Password cannot exceed more than 10 characters";
        
        return errors;
      };
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
                    <form onSubmit={handleSubmit}>
                    <div className="field">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p className='p'>{formErrors.email}</p>
              <div className="field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p className='p'>{formErrors.password}</p>
                    {/* <input type="email" name="email" value = {email} onChange={(e=>setEmail(e.target.value))} placeholder="Email "/>
                    <input type="password" name="" value = {password} onChange={(e=>setPassword(e.target.value))} placeholder="Password"/> */}
                    <button className="btnn">Login</button>

                    <p className="link">Don't have an account<br/>
                    <a href="/Register">Sign up here</a></p>
                    <div className="icons">
                    <p className="liw">Log in with</p><a id="icongoogle" href="/google"><FcGoogle/></a>
                    </div>
                    </form>
                </div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </div>
    </div>
    
        </>
  )
}

export default Login