import { Router } from "express";
import { decriptToken } from "./helpers/token.js";
import { createProductUseCase } from "./use-case/createProductUseCase.js";
import { listProducts } from "./use-case/listProduct.js";

const router = Router();

router.get("/product", (req, res) => {
  listProducts()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res
        .status(400)
        .json({ status: "Error product!", message: error.message });
    });
});

router.post("/product", function (req, res) {
  const authorozationHeader = req.headers.authorization;
  if(!authorozationHeader) {
    return res.status(401).json({message: 'Authentication required'})
  }

  const token = authorozationHeader.split(' ')[1]

  if(!token){
    return res.status(400).json({message: 'authorization header unexpected'})
  }

  const tokenDecripted = decriptToken(token);
  const userId = tokenDecripted.userId;

  if(!userId){
    return res.status(403).json({message: 'Forbidden'})

  }
    
  const product = req.body;
  createProductUseCase(product)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(400).json({ status: "error", message: error.message });
    });
});

export default router