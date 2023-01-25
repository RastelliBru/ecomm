import { randomUUID } from "crypto";
import { saveProduct } from "../repositories/productRepository.js";

export async function createProductUseCase(product, userId) {
  const createProduct = product;
  createProduct.productId = randomUUID();
  createProduct.createdDate = new Date().toISOString().substring(0, 10);

  const savedProduct = await saveProduct({...product, id_user: userId});
  return savedProduct;
}
