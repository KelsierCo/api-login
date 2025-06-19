import bcrypt from 'bcrypt';

export function hashPassword(password){
    return bcrypt.hash(password, 10)
}

export function comparePassword(password, hashPassword){
    if(!password || !hashPassword) return false
    return bcrypt.compare(password, hashPassword)
}