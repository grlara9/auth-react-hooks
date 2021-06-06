import React from 'react'
import { useForm } from 'react-hook-form'
import './Login.css'

const Login = () =>{
    const {register, handleSubmit, formState:{errors, isDirty, isValid},} = useForm({mode: "onChange"});
    console.log("error object:" ,errors);

    const onSubmit=(data)=>{
        console.log(data)
    }
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