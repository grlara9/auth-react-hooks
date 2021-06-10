import React from 'react'

import './Login.css'

const Login = () =>{
   
    const [formState, inputHandler, setFormData] = useForm(
        {
          email: {
            value: '',
            isValid: false
          },
          password: {
            value: '',
            isValid: false
          }
        },
        false
      );
      
    return(
        <div className="main__form">
        <form>
            <label>Email</label>
            <input type="text" name="email" />
            <label>Password</label>
            <input type="password" name="password" />
            <button type="submit">Login</button>
        </form>
    </div>
    )
}

export default Login