import React from 'react'
 import {useForm} from 'react-hook-form'
const Register=()=>{
    const {register, handleSubmit, error} = useForm();

    const onSubmit=(data)=>{
        console.log(data)
    }
    return (
        <div className="register">
            <form onSubmit={handleSubmit(onSubmit)}> 
                <label>Email</label> 
                <input type="text" name="email" ref={register}/>
                <label>Username</label>
                <input type="text" name="username" ref={register}/>
                <label>Password</label>
                <input type="password" name="password" ref={register}/>
                <button>Register</button>
                
            </form>
        </div>

    )
}

export default Register