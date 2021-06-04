import React from 'react'
import { useForm } from 'react-hook-form'
import './Register.css';
const Register=()=>{

    const {register, handleSubmit, 
        formState:{errors},} = useForm();
    console.log("the errirs:" ,errors)
    const onSubmit=(data)=>{
        console.log(data)
    }
    return (
        <div className="register">
            <form onSubmit={handleSubmit(onSubmit)}> 
                <label>Email</label> 
                <input
                type="text" 
                
                {...register("email", { 
                    required: "Email is required",
                    pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Email format not valid"
                    }
                })}
                />
                {errors.email && (<p className="danger"> {errors.email.message}</p> )}

                <label>Username</label>
                <input type="text" name="username" {...register('username')}/>
                <label>Password</label> 
                <input type="password" name="password" {...register('password', {minLength: 6})
            
        }/>
        
                <button type="submit">Register</button>
                
            </form>
        </div>

    )
}

export default Register