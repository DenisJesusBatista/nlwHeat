import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken";


export function ensureAutheticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({
            errorCode: "token.invalid"
        });
    }


    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(token, process.env.JWT_SECRET)

    } catch (error) {
        return response.status(401).json({
            errorCode: "token.expired"
        })

    }

}