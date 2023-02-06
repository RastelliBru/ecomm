import crypto from 'crypto'
import { emailValidate, findAccountByEmail, passwordValidate, saveAccount } from "../../repositories/accountRepository.js";
import bcrypt from 'bcryptjs'


export async function createUserUseCase(name, email, password) {

  const validEmail = await emailValidate(email);
  if(!validEmail) {
    console.error('Invalid email', email);
    throw new Error('Invalid email');
}

  const validPassword = await passwordValidate(password);
  if(!validPassword) {
   console.error('Invalid password, must contains at least 8 characters', password);
  throw new Error('Invalid password, must contains at least 8 characters');
}

  const accountAlreadyExists = await findAccountByEmail(email);
    
    if(!!accountAlreadyExists) {
        console.error('Account already exists', email);
        throw new Error('Account already exists');
    }

  const createdDate = new Date().toISOString().substring(0, 10);
  const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.HASH_SALT));
  const id= crypto.randomUUID();
  const user = {
    id,
    name,
    email,
    password: hashedPassword,
    createdDate,
  };

  saveAccount(user);
  return user;
}
