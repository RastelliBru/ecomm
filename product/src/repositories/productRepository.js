import  Product from "../../models/product.js";
import ProductFeature from "../../models/productfeature.js";
import ProductImage from "../../models/productimage.js";

export async function saveProduct(produto) {
  const createdProduct = await Product.create(produto,{
    include: [
      { association: Product.ProductFeature, as: 'features', },
      { association: Product.ProductImage, as: 'images', },
    ]
  });
  await createdProduct.save()
  
  return createdProduct;
}

export async function findProduct() {
  const products = await Product.findAll({include: [
   {
    model: ProductImage,
    as: 'images'
   }, 
   {
    model: ProductFeature,
    as: 'features'
  }
  ]});
  return products
}


