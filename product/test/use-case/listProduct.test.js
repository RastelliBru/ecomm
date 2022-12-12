import { produto1, produto2 } from "../../src/repositories/products.js";
import { createProductUseCase } from "../../src/use-case/createProductUseCase.js";
import { listProducts } from "../../src/use-case/listProduct.js";
import { produto } from "./createProductUseCase.test.js";

//quando a const produto é importada do arq createProductUseCase.js, mesmo não sendo utilizada ela consegue popular a listproduct
// mantendo somente o primeiro objeto Product no createProductUseCase.test.js, os demais podem ficar em um arq product.js
// deve-se criar no createProductUseCase.test.js o const product1 = await createProductUseCase(produto1); ou mais
// dependendo da necessidade de uso de objetos dentro da lista de produtos. Essas variáveis de objetos também devem ser
// importadas para o arquivo listProduct.test.js
// a productList já sairá populada

const productList = await listProducts();
console.log("Product: ", productList);
