import { RequestHandler } from "express";

export const intervir: RequestHandler = (req, res, next) => {
    const isLogged = true

    if(isLogged) {
        console.log('Ok')
        next()
        return
    } else {
        console.log('erro.')
        return
    }
}