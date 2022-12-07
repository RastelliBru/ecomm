import { createProductUseCase } from "../../src/use-case/createProductUseCase.js";
import { saveProduct } from "../../src/repositories/productRepository.js";

const produto = {
  nome: "the Sims 4",
  valor: "99",
  quantidade: 1,
  descricao: "description",
  categoria: "games",
  caracteristicas: [
    {
      nome: "jogo",
      descricao: "jogo de simulação",
    },
  ],
  imagens: [
    {
      url: "image.png",
      descricaoImagem: "imagem de jogo",
    },
  ],
};

const product = await createProductUseCase(produto);
console.log("product: ", product);
