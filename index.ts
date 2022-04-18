import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes config
import router from './routes/index'

app.use('/', router)

const PORT = process.env.PORT 

app.listen(PORT, ()=>{
    console.log('listening on port 5000')
})