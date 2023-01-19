import { Router } from "express";
import { createUserUseCase } from "./use-case/createUserAccount.js";
import bcrypt from "bcryptjs";

const router = Router();

router.post("/account", async (req, res) => {
  const { name, email, password } = req.body;
  const encodedPassword = bcrypt.hashSync(password, 10);
  const user = await createUserUseCase(name, email, encodedPassword)
    .then((user) => {
      const userCreated = {
        id: user.id,
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

export {router}