import cors from 'cors'
import express from 'express'
import examPerformanceRoute from './routes/examPerfomance.js'
import gradeRoute from './routes/gradeRoute.js'
import studentRoute from './routes/studentRoute.js'
import subjectRoute from './routes/subjectsRoute.js'
import teacherRoute from './routes/teacherRoute.js'
import userRoute from './routes/userRoute.js'
const app=express()
app.use(express.json())
app.use(cors())
//Middleware
app.use('/server/users',userRoute)
app.use('/server/students',studentRoute)
app.use('/server/subjects',subjectRoute)
app.use('/server/grades',gradeRoute)
app.use('/server/teachers',teacherRoute)
app.use('/server/examPerformance',examPerformanceRoute)
app.listen(8800,()=>{
    console.log("Server is listenning on port 8800")
})