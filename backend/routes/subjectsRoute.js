import express from "express";
import { addSubject, deleteSubject, getAllSubjects, updateSubject } from "../controllers/subjectsContoller.js";
const router=express.Router();

router.post('/',addSubject);
router.get('/',getAllSubjects);
router.put('/:id',updateSubject);
router.delete('/:id',deleteSubject);
export default router;