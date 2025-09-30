import db from "../connectDb.js";

export const getAllUsers=async(req,res)=>{
    try{
   const q=`SELECT * FROM users`;
    db.query(q,async(err,dat)=>{
        if(err) return res.json({message:err});
        if(dat.length === 0) return res.json({message:"No users found"});
        return res.json({message:dat});
    })
    }catch(err){
        return res.json({message:err});
    }
}