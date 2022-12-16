import { Router } from "express";
import { createUserUseCase } from "./use-case/createUserAccount.js";

export const router = Router();

router.post("/account", function (req, res) {
  const { name, email, password } = req.body;
  createUserUseCase(name, email, password)
    .then((user) => {
      const userCreated = {
        name: user.name,
        email: user.email,
        date: user.createdDate,
      };
      res.status(201).json(userCreated);
    })
    .catch((e) => {
      res.status(400).json({ status: "erro", message: e.message });
    });
});
