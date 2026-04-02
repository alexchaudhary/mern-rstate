import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to MongoDB')
})
.catch((err) => {
console.log(err)
})

const app = express()

app.listen(4000, () => {
    console.log('Server is running on port 4000');
    
})

//create test api route
app.use('/api/user', userRouter)

