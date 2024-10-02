export const checkEmailValidation=(email)=>{
    const isValidemail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    if(!isValidemail) return "Email id is not valid"
    return null;
}