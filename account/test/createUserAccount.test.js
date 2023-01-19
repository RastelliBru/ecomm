import request from 'supertest';
import { client, getUsersCollection } from '../repositories/accountRepository.js';
import { app } from '../src/app.js';

describe('Account Creation', () => {
    afterEach( async() => {
        await client.connect();
        const usersCollection = await getUsersCollection(client);
        await usersCollection.deleteMany({});
    })
    it('Should create an user given correct user data', async () => {
        await request(app)
            .post('/account')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                name: 'Bruna',
                email: 'bruna@example.com',
                password: 'examplepass123'
            })
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    id: expect.any(String),
                    name: 'Bruna',
                    email: 'bruna@example.com',
                    date: new Date().toISOString().substring(0, 10),
                })   
            })
    })
})
