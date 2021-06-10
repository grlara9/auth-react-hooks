export const validate =(values)=>{
    let errors = {};

    if(!values.username.trim()){
        errors.username ='Username required'
    }

}