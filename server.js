import dotenv from 'dotenv'
import dbConnect from './config/db'
import app from './app'

dotenv.config()


const port=process.env.port


dbConnect()
    .then(()=>{
        app.listen(port,()=>{
            console.log(`Connected to server ${port}`)
        })
    })
    .catch(err=>{
        console.error('Falied to connect to the DB',err)
    })