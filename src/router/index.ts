import { Router } from 'express'
import routerProdutos from './produtos'
import { intervir } from '../middleware/intervir'

const roter = Router()

roter.use('/produtos', intervir, routerProdutos)

roter.get('/ping', (req, res) => {
    return res.json({ pong: true })
})

roter.get('/', (req, res) => {
    return res.send('Hello World!!')
})

export default roter