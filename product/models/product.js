import { Model, DataTypes } from 'sequelize';
import client from '../src/repositories/connectiondb.js';
import ProductFeature from './productfeature.js';
import ProductImage from './productimage.js';

 class Product extends Model {
  static associate(models) {}
}
Product.init({
  id_user: DataTypes.UUID,
  name: DataTypes.STRING,
  value: DataTypes.STRING,
  quantity: DataTypes.STRING,
  description: DataTypes.STRING,
  category: DataTypes.STRING
}, {
    sequelize: client,
    modelName: 'Product',
});

export default Product

Product.ProductImage = Product.hasMany(ProductImage, {
  foreignKey: 'product_id',
  as: 'images'
})

Product.ProductFeature = Product.hasMany(ProductFeature, {
  foreignKey: 'product_id',
  as: 'features'
})

ProductFeature.belongsTo(Product, {
  foreignKey: 'id'
})

ProductImage.belongsTo(Product, {
  foreignKey: 'id'
})
