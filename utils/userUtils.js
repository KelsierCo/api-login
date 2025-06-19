import ApiError from './ApiError.js';
import { comparePassword } from './passwordUtils.js';
import { getUserByEmail } from '../model/usersModel.js';

export function getUserOrThrow(email) {
  const user = getUserByEmail(email);
  if (!user) throw new ApiError(404, 'User not found');
  return user;
}

export function matchPasswordOrThrow(password, passwordHashed){
    const match = comparePassword(password, passwordHashed)
    if(!match) throw new ApiError(401, 'Invalid credentials')
    return match
}
