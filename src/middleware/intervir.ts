import { RequestHandler } from "express";

export const intervir: RequestHandler = (req, res, next) => {
    const isLogged = true

    if(isLogged) {
        console.log('Ok')
        next()
    } else {
        console.log('erro.')
        return
    }
}