import db from "../connectDb.js";

export const getAllGrades=async(req,res)=>{
    try{
        const q=`SELECT * FROM grades`;
        db.query(q,async(err,dat)=>{
            if(err) return res.json({message:err});
            if(dat.length === 0) return res.json({message:"No grades found"});
            return res.json({message:dat});
        })
    }catch(err){
        return res.json({message:err});
    }
}
export const addGrade=async(req,res)=>{
    try{
        const q=`INSERT INTO grades(student_id,name, branches) VALUES (?,?,?)`;
        db.query(q,[req.body.student_id,req.body.name,req.body.branches],async(err,dat)=>{
            if(err) return res.json({message:err});
            return res.json({message:"Grade added successfully"});
        })
    }catch(err){
        return res.json({message:err});
    }
}
export const updateGrade=async(req,res)=>{
    try{
        const q=`UPDATE grades SET student_id=?,name=?,branches=? WHERE id=?`;
        db.query(q,[req.body.student_id,req.body.name,req.body.branches,req.params.id],async(err,dat)=>{
            if(err) return res.json({message:err});
            return res.json({message:"Grade updated successfully"});
        })
    }catch(err){
        return res.json({message:err});
    }
}
export const deleteGrade=async(req,res)=>{
    try{
        const q=`DELETE FROM grades WHERE id=?`;
        db.query(q,[req.params.id],async(err,dat)=>{
            if(err) return res.json({message:err});
            return res.json({message:"Grade deleted successfully"});
        })
    }catch(err){
        return res.json({message:err});
    }
}
export const getGradeByStudentId=async(req,res)=>{
   try{
    const q=`SELECT * FROM grades WHERE student_id=?`;
    db.query(q,[req.params.student_id],async(err,dat)=>{
        if(err) return res.json({message:err});
        if(dat.length === 0) return res.json({message:"No grades found"});
        return res.json({message:dat});
    })
   }catch(err){
    return res.json({message:err});
   }
}
    