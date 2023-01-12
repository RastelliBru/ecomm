
import { Model, DataTypes } from 'sequelize';
import client from '../src/repositories/dabaseclient.js';

  class Product extends Model {
 
    static associate(models) {
    }
  }
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
