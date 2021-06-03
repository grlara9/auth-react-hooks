import React from 'react'
import {useForm} from 'react-hook-form'
import './Register.css';
const Register=()=>{
    const {register, handleSubmit, error} = useForm();

    const onSubmit=(data)=>{
        console.log(data)
    }
    return (
        <div className="register">
            <form onSubmit={handleSubmit(onSubmit)}> 
                <label>Email</label> 
                <input type="text" name="email" {...register('email')}/>
                <label>Username</label>
                <input type="text" name="username" {...register('username')}/>
                <label>Password</label> 
                <input type="password" name="password" {...register('password')}/>
                <button type="submit">Register</button>
                
            </form>
        </div>

    )
}

export default Register