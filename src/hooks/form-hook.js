import { useCallback, useState} from 'react';

const useForm =()=>{
    const [values, setValues] = useState({
        email:'',
        password:''
    })
    const [errors, setErrors] = useState({})

    const handleChange= e =>{
        const {name, value}= e.target;
        setValues({
            ...values,
            [name]: value
        })
        console.log(values)
    }
    return {handleChange, values}
}
export default useForm;
