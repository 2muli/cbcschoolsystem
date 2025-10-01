import express from "express";
import { addGrade, deleteGrade, getAllGrades, getGradeByStudentId, updateGrade } from "../controllers/gradeController.js";
const router=express.Router();

router.get('/',getAllGrades);
router.post('/',addGrade);
router.put('/:id',updateGrade);
router.delete('/:id',deleteGrade);
router.get('/:id',getGradeByStudentId);

export default router;