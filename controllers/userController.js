export const getProfile=(req,res)=>{
    const {name,email}=req.user
    res.json({name,email})
}