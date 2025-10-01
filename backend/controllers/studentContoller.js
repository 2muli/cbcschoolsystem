import db from "../connectDb.js";

export const getAllStudents=async(req,res)=>{
    try{
        const q=`SELECT * FROM students`;
        db.query(q,async(err,dat)=>{
            if(err) return res.json({message:err});
            if(dat.length === 0) return res.json({message:"No students found"});
            return res.send(dat);
        })
    }catch(err){
        return res.json({message:err});
    }
}

export const getStudentById=async(req,res)=>{
    try{
        const q=`SELECT * FROM students WHERE id=?`;
        db.query(q,[req.params.id],async(err,dat)=>{
            if(err) return res.json({message:err});
            if(dat.length === 0) return res.json({message:"No students found with such id"});
            return res.json({message:dat});
        })
    }catch(err){
        return res.json({message:err});
    }
}

export const addStudent=async(req,res)=>{
    try{
        const q=`INSERT INTO students(firstName, secondName, lastName, admissionNumber, grade, createdAt) VALUES (?, ?, ?, ?, ?, ?)`;
        db.query(q,[req.body.firstName,req.body.secondName,req.body.lastName,req.body.admissionNumber,req.body.grade,req.body.createdAt],async(err,dat)=>{
            if(err) return res.json({message:err});
            return res.json({message:"Student added successfully"});
        })
    }catch(err){
        return res.json({message:err});
    }
}

export const updateStudent=async(req,res)=>{
    try{
        const q=`UPDATE students SET firstName=?, secondName=?, lastName=?, admissionNumber=?, grade=?, createdAt=? WHERE id=?`;
        db.query(q,[req.body.firstName,req.body.secondName,req.body.lastName,req.body.admissionNumber,req.body.grade,req.body.createdAt,req.params.id],async(err,dat)=>{
            if(err) return res.json({message:err});
            return res.json({message:"Student updated successfully"});
        })
    }catch(err){
        return res.json({message:err});
    }
}
    
export const deleteStudent=async(req,res)=>{
    try{
        const q=`DELETE FROM students WHERE id=?`;
        db.query(q,[req.params.id],async(err,dat)=>{
            if(err) return res.json({message:err});
            return res.json({message:"Student deleted successfully"});
        })
    }catch(err){
        return res.json({message:err});
    }
}

export const getStudentsByClassId=async(req,res)=>{
    try{
        const q=`SELECT * FROM students WHERE grade=?`;
        db.query(q,[req.params.grade],async(err,dat)=>{
            if(err) return res.json({message:err});
            if(dat.length === 0) return res.json({message:"No students found"});
            return res.json({message:dat});
        })
    }catch(err){
        return res.json({message:err});
    }
}

export const getStudentByfirstNameOrLastName=async(req,res)=>{
    try{
        const q=`SELECT * FROM students WHERE firstName=? OR lastName=?`;
        db.query(q,[req.params.firstName,req.params.lastName],async(err,dat)=>{
            if(err) return res.json({message:err});
            if(dat.length === 0) return res.json({message:"No students found"});
            return res.json({message:dat});
        })
    }catch(err){
        return res.json({message:err});
    }
}
