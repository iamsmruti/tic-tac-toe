import express from 'express'
import cors from 'cors'
import http from 'http'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'


import authRoutes from './routes/authRoutes.js'
import gameRoutes from './routes/gameRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
const server = http.createServer(app)
dotenv.config()

app.use(cors({
    origin: ['http://localhost:3000', 'https://crossedcircle.vercel.app', 'https://crossedcircle-api.vercel.app'],
    credentials: true,
}))

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/game', gameRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => server.listen(process.env.PORT, () => console.log(`Server is live at http://localhost:${process.env.PORT}`)))

export default app