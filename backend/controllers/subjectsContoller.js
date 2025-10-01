import db from "../connectDb.js";

export const getAllSubjects=async(req,res)=>{
    try{
        const q=`SELECT * FROM subjects`;
        db.query(q,async(err,dat)=>{
            if(err) return res.json({message:err});
            if(dat.length === 0) return res.json({message:"No subjects found"});
            return res.json({message:dat});
        })
    }catch(err){
        return res.json({message:err});
    }
}
export const addSubject=async(req,res)=>{
    try{
        const q=`INSERT INTO subjects(name,grade) VALUES (?,?)`;
        db.query(q,[req.body.name,req.body.grade],async(err,dat)=>{
            if(err) return res.json({message:err});
            return res.json({message:"Subject added successfully"});
        })
    }catch(err){
        return res.json({message:err});
    }
}
export const updateSubject = (req, res) => {
    try {
      const { name, grade } = req.body;
      const { id } = req.params;
  
      if (!name || !grade || !id) {
        return res.json({ error: "Please provide all required fields" });
      }
  
      // check if subject exists
      db.query("SELECT * FROM subjects WHERE id = ?", [id], (err, dat) => {
        if (err) return res.json({ error: err.message });
        if (dat.length === 0) {
          return res.json({ error: "No subject found" });
        }
  
        const q = "UPDATE subjects SET name = ?, grade = ? WHERE id = ?";
        db.query(q, [name, grade, id], (err) => {
          if (err) return res.json({ error: err.message });
  
          return res.json({ message: "Subject updated successfully" });
        });
      });
    } catch (err) {
      return res.json({ error: err.message });
    }
  };
  
export const deleteSubject=async(req,res)=>{
    try{
        const q=`DELETE FROM subjects WHERE id=?`;
        if(!req.params.id){
            return res.json({message:"Please provide all required fields"});
        }
        //check if subject exists
        db.query(`SELECT * FROM subjects WHERE id=?`,[req.params.id],async(err,dat)=>{
            if(err) return res.json({message:err});
            if(dat.length === 0) return res.json({message:"No subject found with this id"});
            db.query(q,[req.params.id],async(err,dat)=>{
                if(err) return res.json({message:err});
                return res.json({message:"Subject deleted successfully"});
            })
        })
    }catch(err){
        return res.json({message:err});
    }
}
export const getSubjectByClassName=async(req,res)=>{
    try{
        const q=`SELECT * FROM subjects WHERE grade=?`;
        if(!req.params.grade){
            return res.json({message:"Please provide all required fields"});
        }
        //check if subject exists
        db.query(q,[req.params.grade],async(err,dat)=>{
            if(err) return res.json({message:err});
            if(dat.length === 0) return res.json({message:"No subjects found with this grade"});
            return res.json({message:dat});
        })
    }catch(err){
        return res.json({message:err});
    }
}
        