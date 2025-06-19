import JWT from 'jsonwebtoken';
import ApiError from '../utils/ApiError.js';
import { getUserOrThrow, matchPasswordOrThrow } from '../utils/userUtils.js';
import { buildConfirmationEmail, buildRecoveryEmail } from '../template/emailTemplate.js';
import { sendEmailWithToken } from './email.services.js';

const SECRET_KEY = process.env.SECRET_KEY;

export function generateToken(payload, time){
    return JWT.sign(payload, SECRET_KEY, {expiresIn: time})
}

export function validateToken(token){
    try {
        return JWT.verify(token, SECRET_KEY);
    } catch (err) {
        throw new ApiError(403, 'Token Invalid or Expired')
    }
}

export async function loginUser(email, password) {
    const user = getUserOrThrow(email)
    matchPasswordOrThrow(password, user.password)
    return generateToken({ id: user.id, email: user.email}, '2h')
}

export async function sendPasswordRecovery(email) {
    const user = getUserOrThrow(email)
    await sendEmailWithToken(user, 'recovery-password', 'Recuperacion de contraseña', buildRecoveryEmail)
    return {message: 'email sent'}
}

export async function sendConfirmEmail(email) {
    const user = getUserOrThrow(email)
    await sendEmailWithToken(user, 'confirm', 'Confirmacion de correo', buildConfirmationEmail)
    return {message: 'email sent'}
}