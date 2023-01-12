
import { Model, DataTypes } from 'sequelize';
import client from '../src/repositories/dabaseclient.js';
import { ProductFeature } from './product_feature.js';
import { ProductImage } from './product_image.js';

class Product extends Model { 
  static associate(models) {
   }
  }

  Product.hasMany(ProductImage, {
    foreignKey: 'product_id'
  })
  
  Product.hasMany(ProductFeature, {
    foreignKey: 'product_id'
  })

  Product.init({
    id_user: DataTypes.UUID,
    name: DataTypes.STRING,
    value: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    category: DataTypes.STRING
  }, {
    sequelize: client,
    modelName: 'Product',
  });

  export default Product
