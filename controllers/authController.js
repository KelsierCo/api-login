import { updateConfirmEmail, updateUserPassword } from "../model/usersModel.js";
import { sendConfirmEmail, loginUser, sendPasswordRecovery } from "../services/auth.services.js";
import { hashPassword } from "../utils/passwordUtils.js";

export const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const token = await loginUser(email, password);
        res.status(200).json({token})
    } catch (err) {
        next(err)
    }
}

export const fetchSendPasswordRecovery = async (req, res, next) => {
    try {
        const { email } = req.body;
        const response = await sendPasswordRecovery(email)
        res.status(200).json({response})
    } catch (err) {
        next(err)
    }
}

export const fetchPasswordRecovery = async (req, res, next) => {
    try {
        const { newPassword } = req.body;
        const userId = req.user.id;

        const passwordHash = await hashPassword(newPassword)
        await updateUserPassword(userId, passwordHash)

        res.status(200).json({message: 'Password Changed'})
    } catch(err) {
        next(err)
    }
}

export const fetchSendConfirmEmail = async (req, res, next) => {
    try {
        const { email } = req.body;
        const response = await sendConfirmEmail(email)
        res.status(200).json({response})
    } catch (err) {
        next(err)
    }
}

export const fetchConfirmEmail = async(req, res, next) => {
    try {
        const userId = req.user.id;
        await updateConfirmEmail(userId)
        res.status(200).json({message: 'Correo Confirmado'})
    } catch (err) {
        next(err)
    }
}