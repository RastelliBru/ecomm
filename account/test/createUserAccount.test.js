import { createUserUseCase } from "../src/use-case/createUserAccount.js";

const user = createUserUseCase("bruna", "bruna@dominio.com", "123senhA#");

console.log(user);
