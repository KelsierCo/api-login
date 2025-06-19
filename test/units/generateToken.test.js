import { generateToken, validateToken } from '../../services/auth.services.js';

describe('Token services', ()  => {
    it('Should generate and validate a token', () => {
        const payload = {id: 1, email: 'test@example.com'}
        const token = generateToken(payload, '10m')
        const result = validateToken(token);
        expect(result.email).toBe(payload.email)
    })

    it('generate token without email', () => {
        const payload = {id: 1}
        const token = generateToken(payload, '10m')
        const result = validateToken(token);
        expect(result.email).toBe(payload.email)
    })
})