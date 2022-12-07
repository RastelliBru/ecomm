const products = [];

export async function saveProduct(produto) {
  products.push(produto);
  return produto;
}
