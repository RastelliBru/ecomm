import { createProductUseCase } from "../../src/use-case/createProductUseCase.js";
import { produto1, produto2 } from "../../src/repositories/products.js";

export const produto = {
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
const product1 = await createProductUseCase(produto1);
const product2 = await createProductUseCase(produto2);
