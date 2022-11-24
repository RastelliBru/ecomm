let contas = [];
let data = new Date().toLocaleDateString("pt-BR");

export function createUserUseCase(nome, email, senha) {
  const user = {
    id: contas.length + 1,
    name: nome,
    email: email,
    senha: senha,
    createdDate: data,
  };

  contas.push(user);
  return user;
}
