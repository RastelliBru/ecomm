import {Model, DataTypes} from 'sequelize'
import client from '../src/repositories/connectiondb.js';
import Product from './product.js';

  class ProductImage extends Model {
    
    static associate(models) {}
  }
  ProductImage.init({
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    product_id: DataTypes.INTEGER
  }, {
    sequelize: client,
    modelName: 'ProductImage',
  });


  export default ProductImage
