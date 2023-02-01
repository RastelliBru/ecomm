import crypto from 'crypto'
import { findAccountByEmail, saveAccount } from "../../repositories/accountRepository.js";
import bcrypt from 'bcryptjs'


export async function createUserUseCase(name, email, password) {

  function emailValidate(email) {
    //const emailRegex =  /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //return emailRegex.test(String(email).toLowerCase())
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
