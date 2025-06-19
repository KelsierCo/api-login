import request from 'supertest';
import app from '../../index.js';

describe('Auth Endpoints', () => {

    beforeAll((done) => {
        server = app.listen(4000, () => {
            console.log('Servidor iniciado en test');
            done();
        });
    });

    afterAll((done) => {
        server.close(() => {
            console.log('Servidor cerrado');
            done();
        });
    });

    it('should logged credentials incorrect', async() => {
        const res = await request(app)
        .post('/login')
        .send({
            email: 'test@gmail.com',
            password: '123456'
        });

        expect(res.status).toEqual(401);
        expect(res.body).toHaveProperty('message');
    })
});