import { findUserByEmail } from "../../repositories/accountRepository.js";
import { comparePassword } from "../helpers/password.js";
import { generateToken } from "../helpers/token.js";

export async function createUserTokenUseCase(email, password) {
    const possibleUser = await findUserByEmail(email);

    if(!possibleUser){
        return null;
    }

    const passwordCheck = await comparePassword(password, possibleUser.password);

    if(passwordCheck) {
        return generateToken(possibleUser.id);
    }
    return null;
}