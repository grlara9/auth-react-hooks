import React from 'react'
import useForm from '../hooks/form-hook'
import validate from '../utils/validate'
import './Login.css'

const Login = () =>{
   
    const {handleChange, values, handleSubmit} = useForm();
    return(
        <div className="main__form">
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
            id="email" 
            type="text" 
            name="email" 
            placeholder="Enter email" 
            value={values.email}
            onChange={handleChange}
            />
            <label>Password</label>
            <input 
            id="password" 
            type="password" 
            name="password" 
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
            />
            <button type="submit">Login</button>
        </form>
    </div>
    )
}

export default Login