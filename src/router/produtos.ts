import { Router } from 'express'

const routerProdutos = Router()

routerProdutos.get('/:id', (req, res) => {
    const { id } = req.params
    console.log(req.params)
    return res.json({ id }) 
})

export default routerProdutos