export const isNamevalidate=(name)=>{
    const nameValidate=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    if(!nameValidate) return "Name is not Valid"
    return null;
}