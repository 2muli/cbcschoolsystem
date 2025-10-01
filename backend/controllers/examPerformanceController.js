import db from "../connectDb.js";

export const getAllExamPerformances=async(req,res)=>{
    try{
        const q=`SELECT * FROM exams_performance`;
        db.query(q,async(err,dat)=>{
            if(err) return res.json({message:err});
            if(dat.length === 0) return res.json({message:"No exam performances found"});
            return res.json({message:dat});
        })
    }catch(err){
        return res.json({message:err});
    }
}
export const addExamPerformance=async(req,res)=>{
    try{
        const q=`INSERT INTO exams_performance (student_id,exam_id,performance) VALUES (?,?,?)`;
        db.query(q,[req.body.student_id,req.body.exam_id,req.body.performance],async(err,dat)=>{
            if(err) return res.json({message:err});
            return res.json({message:"Exam performance added successfully"});
        })
    }catch(err){
        return res.json({message:err});
    }
}
export const updateExamPerformance=async(req,res)=>{
    try{
        const q=`UPDATE exams_performance SET student_id=?,exam_id=?,performance=? WHERE id=?`;
        db.query(q,[req.body.student_id,req.body.exam_id,req.body.performance,req.params.id],async(err,dat)=>{
            if(err) return res.json({message:err});
            return res.json({message:"Exam performance updated successfully"});
        })
    }catch(err){
        return res.json({message:err});
   }
}      
export const deleteExamPerformance=async(req,res)=>{
    try{
        const q=`DELETE FROM exams_performance WHERE id=?`;
        db.query(q,[req.params.id],async(err,dat)=>{
            if(err) return res.json({message:err});
            return res.json({message:"Exam performance deleted successfully"});
        })
    }catch(err){
        return res.json({message:err});
    }
}
export const getExamPerformanceByStudentId=async(req,res)=>{
    try{
        const q=`SELECT * FROM exams_performance WHERE student_id=?`;
        db.query(q,[req.params.student_id],async(err,dat)=>{
            if(err) return res.json({message:err});
            if(dat.length === 0) return res.json({message:"No exam performances found"});
            return res.json({message:dat});
        })
    }catch(err){
        return res.json({message:err});
    }
}
export const getExamPerformanceByExamId=async(req,res)=>{
    try{
        const q=`SELECT * FROM exams_performance WHERE exam_id=?`;
        db.query(q,[req.params.exam_id],async(err,dat)=>{
            if(err) return res.json({message:err});
            if(dat.length === 0) return res.json({message:"No exam performances found"});
            return res.json({message:dat});
        })
    }catch(err){
        return res.json({message:err});
    }
}
export const getExamPerformanceByPerformanceByClassName =async(req,res)=>{
    try{
        const q=`SELECT * FROM exams_performance WHERE performance=? AND class_name=?`;
        db.query(q,[req.params.performance,req.params.class_name],async(err,dat)=>{
            if(err) return res.json({message:err});
            if(dat.length === 0) return res.json({message:"No exam performances found"});
            return res.json({message:dat});
        })
    }catch(err){
        return res.json({message:err});
    }
}