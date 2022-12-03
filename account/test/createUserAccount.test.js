import { createUserUseCase } from "../src/use-case/createUserAccount.js";

const user = createUserUseCase("Maria", "Maria@dominio.com", "123senhA#")

console.log(user);
