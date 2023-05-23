import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Login from './Login';
function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
       alert("Form submitted");
    }

    const handleChange = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    }
    
  return <>
  <FormContainer>
    
    <form onSubmit={(event)=>handleSubmit(event)}>
        <div className="brand">
            <img src="" alt="" />
            <h1>
                Snapply
            </h1>
            <input type="text" 
             placeholder="Username" 
             name="username" 
             onChange={ e=>handleChange(e)} />
             <input type="email" 
             placeholder="Email" 
             name="email" 
             onChange={ e=>handleChange(e)} />
             <input type="password" 
             placeholder="Password" 
             name="password" 
             onChange={ e=>handleChange(e)} />
              <input type="password" 
             placeholder="Confirm Password" 
             name="confirmpassword" 
             onChange={ e=>handleChange(e)} />

                <button type="submit">Create User</button>
                <span> Already have an account? <Link to="/login">Login</Link> </span>
            
        </div>
    </form>
    
     </FormContainer>

  </>; 
}
const FormContainer = styled.div ``

export default Register;