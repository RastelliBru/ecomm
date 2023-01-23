import request from 'supertest';
import app from '../../src/app.js';
import { produto1 } from '../../src/repositories/products.js';
import { cleanProductTable } from './helpers/products.js';

describe('Product Creation', () => {

    afterEach(async () => {
        await cleanProductTable();
    });

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
                    createdDate: expect.any(String),
                    productId: expect.any(String),
                    features: produto1.features.map(feature => ({
                        ...feature
                    })),
                    images: produto1.images.map(image => ({
                        ...image 
                    }))
                });
            });
    });
});