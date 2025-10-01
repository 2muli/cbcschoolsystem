import express from "express";
import { addStudent, deleteStudent, getAllStudents, getStudentByfirstNameOrLastName, getStudentById, getStudentsByClassId, updateStudent } from "../controllers/studentContoller.js";
const router=express.Router();

router.get('/',getAllStudents);
router.post('/',addStudent);
router.put('/:id',updateStudent);
router.delete('/:id',deleteStudent);
router.get('/:id',getStudentById);
router.get('/class/:class_id',getStudentsByClassId);
router.get('/name/:first_name/:last_name',getStudentByfirstNameOrLastName);

export default router;