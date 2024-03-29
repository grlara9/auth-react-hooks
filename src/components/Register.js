import React from 'react'
import { useForm } from 'react-hook-form'
import './Register.css';

const Register=()=>{
    const {register, handleSubmit, formState:{errors, isDirty, isValid},} = useForm({mode: "onChange"});
    console.log("error object:" ,errors);

    const onSubmit=(data)=>{
        console.log(data)
    }
    return (
        <div className="main__form">
            <form  onSubmit={handleSubmit(onSubmit)}> 
            <h1>Register</h1>
                <label className="label">Email</label>  {errors.email && (<p className="danger"> {errors.email.message}</p> )}
                    <input
                        type="text" 
                        placeholder="Enter Email"
                        {...register("email", { 
                            required: "Email is required",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Email format not valid"
                                }})}/>
                        

                <label>Username</label>
                    <input 
                    type="text" 
                    name="username" 
                    placeholder="Enter an Username"
                    {...register('username', {
                        required: "Username is required",
                        minLength: 6,
                        maxLength: 12,
                        pattern:{
                            value: /^[A-Za-z0-9]+$/i,
                            message: "Username contain uppercase , lowercase and number"
                        }
                    })}/>
                    {errors.username && (<p className="danger"> {errors.username.message}</p> )}

                <label>Password</label> 
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter password"
                        {...register('password',
                            {required: "Password is required",
                            minLength: 6,
                            pattern: {
                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ , 
                                message: "Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol."
                            }
                            })}/>
                        {errors.password && (<p className="danger"> {errors.password.message}</p> )}

                        <button type="submit" disabled={!isDirty || !isValid}>Register</button>
                
            </form>
        </div>

    )
}

export default Register