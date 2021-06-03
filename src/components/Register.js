import React from 'react'
 import {useForm} from 'react-hook-form'
const Register=()=>{
    
    return (
        <div className="register">
            <form>
                <label>Email</label>
                <input type="text" name="email" />
                <label>Username</label>
                <input type="text" name="username" />
                <label>Password</label>
                <input type="password" name="password" />
                <button>Register</button>
                
            </form>
        </div>

    )
}

export default Register