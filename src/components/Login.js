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
            <input id="email" type="text" name="email" placeholder="Enter email" />
            <label>Password</label>
            <input id="password" type="password" name="password" placeholder="Enter Password"/>
            <button type="submit">Login</button>
        </form>
    </div>
    )
}

export default Login