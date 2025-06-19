import { Router } from "express";
import { fetchAllUsers, fetchCreateUser, fetchDeleteUser, fetchUpdatePassword, fetchUpdateUser, fetchUserById } from "../controllers/usersController.js";
import { authenticateHandler } from "../middleware/tokenHandler.js";

const usersRouter = Router();

usersRouter.get('/', fetchAllUsers);

usersRouter.get('/:id', authenticateHandler, fetchUserById);

usersRouter.post('/', fetchCreateUser);

usersRouter.put('/', authenticateHandler, fetchUpdateUser);

usersRouter.put('/updatePassword/', authenticateHandler, fetchUpdatePassword);

usersRouter.delete('/', authenticateHandler, fetchDeleteUser);

export default usersRouter;