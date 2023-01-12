import Product from '../../models/product.js'


export async function saveProduct(produto) {
  const createdProduct = await Product.create(produto)
  await createdProduct.save()
  return createdProduct;
}

export async function findProduct() {
  const products = await Product.findAll();
  return products
}


