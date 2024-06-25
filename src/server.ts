import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import path from 'path'
import indexRouter from './router/index'
import { errorHandler, notFoundRequest } from './router/errorhandler'

const server = express()

// vai protever contra ataquis de hackers
server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/', indexRouter)
server.use(notFoundRequest)
server.use(errorHandler)

server.listen(process.env.PORT, () => {
    console.log(`Server ruinn http://localhost:${process.env.PORT}/` );
})