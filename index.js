import express from 'express'
import bodyParser from 'body-parser' // body parser middleware
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

// middleware
app.use('/posts', postRoutes)

app.get('/', (req, res) =>{
    res.send('Hello to Memories MERN Api')
})

const PORT = process.env.PORT || 5000

// opens mongoose default connection to mongodb
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    // if connection is successful
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    // if connection is not successful
    .catch((error) => console.log(error.message))
