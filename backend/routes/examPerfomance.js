import express from "express";
import { addExamPerformance, deleteExamPerformance, getAllExamPerformances, getExamPerformanceByExamId, updateExamPerformance } from "../controllers/examPerformanceController.js";
const router=express.Router();

router.get('/',getAllExamPerformances);
router.post('/',addExamPerformance);
router.put('/:id',updateExamPerformance);
router.delete('/:id',deleteExamPerformance);
router.get('/:id',getExamPerformanceByExamId);
;

export default router;