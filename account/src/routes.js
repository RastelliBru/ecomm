import { Router } from "express";
import { createUserUseCase } from "./use-case/createUserAccount.js";
import { createUserTokenUseCase } from "./use-case/createUserToken.js";

const router = Router();

router.post("/account", async (req, res) => {
  const { name, email, password } = req.body;
  createUserUseCase(name, email, password)
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

router.post('/token', async (req, res) => {
    const {email, password} = req.body;
    const token = await createUserTokenUseCase(email, password); 

    if(!token){
      return res.status(401).json({
        message: 'Email, user or password incorrect',
      })
    }
    
    return res.status(201).json({
      token,
    })
})

export {router}