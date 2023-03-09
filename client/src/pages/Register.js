import React from 'react'
import { useState,useEffect } from 'react'
import '../styles/register.css'

const Register=()=>{
const initialValues = { fullname: "", email: "", password: "" };
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
          checkforregistration();
          setIsSubmit(true);
        };
        useEffect(() => {
          console.log(formErrors);
          if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
          }
        }, [formErrors, formValues, isSubmit]);
        const validate = (values) => {
          const errors = {};
          const regexpass=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
          const regex = /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
          if (!values.fullname) {
            errors.fullname = "Username is required!";
          }
          if (!values.email) {
            errors.email = "Email is required!";
          } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
          if (!values.password) {
            errors.password = "Password is required";
          }else if(!regexpass.test(values.password))
          {
            errors.password="password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters!";
          }
         
          return errors;
        };
    const checkforregistration = async (e) =>{
        e.preventDefault();
        // eslint-disable-next-line no-undef
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
      return (
        <>
        <div className='main1'>
            <div className='form1'>
                <h2>Sign up Here</h2>
          <form onSubmit={handleSubmit}>
              <div className="field">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Username"
                  value={formValues.fullname}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.fullname}</p>
              <div className="field">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.email}</p>
              <div className="field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>
              <button className="btnn">Register</button>
              <p className="link"><a href="/">back</a></p>
          </form>
      </div>
      </div>
      </>
      );
    }
export default Register;





