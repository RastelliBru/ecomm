import { createProductUseCase } from "../../src/use-case/createProductUseCase.js";
import { listProducts } from "../../src/use-case/listProduct.js";
import { produto } from "./createProductUseCase.test.js";

const productList = await listProducts();
console.log("Array vazio ", productList);

// await createProductUseCase(produto);
