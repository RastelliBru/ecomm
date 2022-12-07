import { randomUUID } from "crypto";
import { saveProduct } from "../repositories/productRepository.js";

export async function createProductUseCase(product) {
  const createProduc = product;
  createProduc.createdDate = randomUUID();
  createProduc.productId = new Date().toISOString().substring(0, 10);

  await saveProduct(createProduc);
  return createProduc;
}
