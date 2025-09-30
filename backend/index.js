import cors from 'cors'
import express from 'express'
import userRoute from './routes/userRoute.js'
const app=express()
app.use(express.json())
app.use(cors())
//Middleware
app.use('/server/users',userRoute)

app.listen(8800,()=>{
    console.log("Server is listenning on port 8800")
})