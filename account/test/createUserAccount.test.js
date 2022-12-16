import { createUserUseCase } from "../src/use-case/createUserAccount.js";

const user = createUserUseCase("Bruna", "bruna@dominio.com", "123senhA#");

console.log(user);
