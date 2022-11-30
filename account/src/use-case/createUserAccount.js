let contas = [];

export function createUserUseCase(name, email, password) {
  const createdDate = new Date().toISOString().substring(0, 10);
  const user = {
    id: contas.length + 1,
    name,
    email,
    password,
    createdDate,
  };

  contas.push(user);
  return user;
}
