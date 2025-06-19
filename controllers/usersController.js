import { createUser, deleteUser, getAllUsers, getUserById, updateUser, updateUserPassword } from "../model/usersModel.js";

export const fetchAllUsers = async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (err) {
       next(err)
    }
}

export const fetchUserById = async (req, res, next) => {
    try {
        const id = req.user.id;
        const user = await getUserById(id);
        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
}

export const fetchCreateUser = async (req, res, next) => {
    try {
        const {nombre, email, password} = req.body;
        const userCreated = await createUser(nombre, email, password);
        res.status(201).json(userCreated);
    } catch (err) {
        next(err)
    }
}

export const fetchUpdateUser = async (req, res, next) => {
    try {
        const { name } = req.body;
        const id = req.user.id
        const userUpdated = await updateUser( id, { name });
        res.status(200).json(userUpdated)
    } catch (err) {
        next(err)
    }
}

export const fetchUpdatePassword = async (req, res, next) => {
    try {
        const { password } = req.body;
        const id = req.user.id;
        
        const userUpdated = await updateUserPassword(id, password);
        res.status(200).json(userUpdated)
    } catch (err) {
        next(err)
    }
}

export const fetchDeleteUser = async (req, res, next) => {
    try {
        const { email } = req.body;
        const id = req.user.id
        const userDeleted = await deleteUser(id, email);
        res.status(200).json(userDeleted);
    } catch (err) {
        next(err)
    }
}
