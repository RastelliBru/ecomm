import request from 'supertest';
import app from '../../src/app.js';
import { produto1 } from '../../src/repositories/products.js';
import { cleanProductTable } from './helpers/products.js';
import { generateToken } from './helpers/token.js';

describe('Product Creation', () => {

    afterEach(async () => {
        await cleanProductTable();
    });

    it('should create a product given required product data', async () => {
        await request(app)
            .post('/product')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${generateToken('user-id')}`)
            .send(produto1)
            .expect(201)
            .expect(({ body}) => {
                expect(body).toEqual({
                    ...produto1,
                    id: expect.any(Number),
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    features: produto1.features.map(feature => ({
                        ...feature,
                        createdAt: expect.any(String),
                        product_id: expect.any(Number),
                        id: expect.any(Number),
                        updatedAt: expect.any(String),

                    })),
                    images: produto1.images.map(image => ({
                        ...image,
                        createdAt: expect.any(String),
                        id: expect.any(Number),
                        product_id: expect.any(Number),
                        updatedAt: expect.any(String),
                        
                    }))
                });
            });
    });
});