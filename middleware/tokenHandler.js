import { validateToken } from '../services/auth.services.js';
import ApiError from '../utils/ApiError.js';

export function authenticateHandler(req, res, next){
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token) throw new ApiError(401, 'Token required');

        req.user = validateToken(token);
        
        next();
    } catch (err) {
        next(err)
    }
}

export function verifyTokenRecovery(req, res, next){
    try {
        const token = req.query.token;
        if(!token) throw new ApiError(401, 'Token required')

        const payload = validateToken(token)

        req.user = payload;
        next()
    } catch (err) {
        next(err)
    }
}