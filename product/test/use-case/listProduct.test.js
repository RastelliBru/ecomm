import { produto1, produto2 } from "../../src/repositories/products.js";
import { createProductUseCase } from "../../src/use-case/createProductUseCase.js";
import { listProducts } from "../../src/use-case/listProduct.js";
import { produto } from "./createProductUseCase.test.js";

const productList = await listProducts();
console.log("Product: ", productList);
