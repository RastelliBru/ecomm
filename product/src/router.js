import { Router } from "express";
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