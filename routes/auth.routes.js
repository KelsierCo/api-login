import { Router } from 'express';
import { fetchConfirmEmail, fetchPasswordRecovery, fetchSendPasswordRecovery, fetchSendConfirmEmail, login } from '../controllers/authController.js';
import { verifyTokenRecovery } from '../middleware/tokenHandler.js';

const loginRouter = Router();

loginRouter.post('/', login)

loginRouter.post('/recovery', fetchSendPasswordRecovery)

loginRouter.post('/reset-password', verifyTokenRecovery, fetchPasswordRecovery)

loginRouter.post('/email-confirm', fetchSendConfirmEmail)

loginRouter.post('/confirm', verifyTokenRecovery, fetchConfirmEmail)

export default loginRouter;