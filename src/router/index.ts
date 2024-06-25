import { Router } from 'express'
import routerProdutos from './produtos'

const roter = Router()

roter.use('/produtos', routerProdutos)

roter.get('/ping', (req, res) => {
    return res.json({ pong: true })
})

roter.get('/', (req, res) => {
    return res.send('Hello World!!')
})

export default roter