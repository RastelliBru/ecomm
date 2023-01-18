import crypto from 'crypto'
import { saveAccount } from "../../repositories/accountRepository.js";

export async function createUserUseCase(name, email, password) {
  const createdDate = new Date().toISOString().substring(0, 10);
  const id = crypto.randomUUID();
  const user = {
    id,
    name,
    email,
    password,
    createdDate,
  };

  saveAccount(user);
  return user;
}
