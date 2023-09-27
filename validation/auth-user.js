import jwt from 'jsonwebtoken';
import { dev } from '../config/index.js';
import HttpError from '../http-error/error.js';

export const authenticateUser = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const tokenVerified = jwt.verify(token, dev.app.jwtSecretKey);
        if(!tokenVerified){
            const err = new HttpError("Token not valid", 401);
            return next(err);
        }

        next();

    }catch(error){
        const err = new HttpError("Token not valid", 401);
        return next(err);
    }
}
