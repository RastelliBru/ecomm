import {Model, DataTypes} from 'sequelize';
import client from '../src/repositories/connectiondb.js';

class ProductFeature extends Model {
    static associate(models) {}
  }
  ProductFeature.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    product_id: DataTypes.INTEGER
  }, {
    sequelize: client,
    modelName: 'ProductFeature',
  });
  
  export default ProductFeature