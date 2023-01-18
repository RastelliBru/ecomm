import request from 'supertest';
import { app } from '../../src/main.js';
import { produto1 } from '../../src/repositories/products.js';

describe('Product Creation', () => {
    it('should create a product given required product data', async () => {
        await request(app)
            .post('/product')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send(produto1)
            .expect(201)
            .expect(({ body}) => {
                expect(body).toEqual({
                    ...produto1,
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    features: produto1.features.map(feature => ({
                        ...feature,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    })),
                    images: produto1.images.map(image => ({
                        ...image,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    }))
                });
            });
    });
});