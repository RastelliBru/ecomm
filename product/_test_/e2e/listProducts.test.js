import request from 'supertest';
import app from '../../src/app.js';
import { saveProduct } from '../../src/repositories/productRepository.js';
import { produto1 } from '../../src/repositories/products.js';
import { cleanProductTable } from './helpers/products.js';

describe('Product list', () => {

    afterEach(async () => {
        await cleanProductTable();
    })
    it('should return an empty list of products', async () => {
        await request(app)
        .get('/product')
        .expect(200)
        .expect(({body}) => {
            expect(body).toEqual([]);
        });
    })

    it('Should return a list of products', async () => {
        await saveProduct(produto1)
        await request(app)
        .get('/product')
        .expect(200)
        .expect(({body}) => {
            expect(body).toEqual([{
                ...produto1,
                id: expect.any(Number),
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                features: produto1.features.map(feature => ({
                    ...feature,
                    createdAt: expect.any(String),
                    product_id: body[0].id,
                    updatedAt: expect.any(String),
                    id: expect.any(Number),
                })),
                images: produto1.images.map(image => ({
                    ...image,
                    createdAt: expect.any(String),
                    id: body[0].id,
                    product_id: expect.any(Number),
                    updatedAt: expect.any(String)
                }))
            }])
        })
    })
})