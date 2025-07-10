import dotenv from 'dotenv'
import dbConnect from './config/db.js'
import app from './app.js'

dotenv.config()


const port=process.env.PORT || 3000


dbConnect()
    .then(()=>{
        app.listen(port,()=>{
            console.log(`Connected to server ${port}`)
        })
    })
    .catch(err=>{
        console.error('Falied to connect to the DB',err)
    })