import { useCallback, useState} from 'react';

const useForm =(validate)=>{
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

    const handleSubmit =(e)=>{
        e.preventDefault()

        setErrors(validate(values))
    }
    return {handleChange, handleSubmit, errors, values}
}
export default useForm;
