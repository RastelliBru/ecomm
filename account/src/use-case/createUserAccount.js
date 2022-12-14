import { saveAccount } from "../../repositories/accountRepository.js";

export async function createUserUseCase(name, email, password) {
  const createdDate = new Date().toISOString().substring(0, 10);
  const user = {
    name,
    email,
    password,
    createdDate,
  };

  saveAccount(user);
  return user;
}
