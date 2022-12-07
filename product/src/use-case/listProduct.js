import { findProduct } from "../repositories/productRepository.js";

export async function listProducts() {
  const products = await findProduct();

  return products;
}
