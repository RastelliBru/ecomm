import { DataTypes } from "sequelize";

export const produto1 = {
  id_user: DataTypes.UUID,
  name: "the Sims 3",
  value: "99",
  quantity: 1,
  description: "description",
  category: "games",
  features: [
    {
      name: "jogo",
      description: "jogo de simulação",
    },
  ],
  images: [
    {
      url: "image.png",
      description: "imagem de jogo",
    },
  ],
};

export const produto2 = {
  nome: "the Sims 1",
  valor: 50.55,
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
