let contas = [];

export function createUserUseCase(nome, email, senha) {
  const data = new Date();
  let dataFormatada = data.toISOString().substring(0, 10);
  const user = {
    id: contas.length + 1,
    name: nome,
    email: email,
    senha: senha,
    createdDate: dataFormatada,
  };

  contas.push(user);
  return user;
}
