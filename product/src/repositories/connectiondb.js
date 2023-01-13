import { Sequelize } from 'sequelize'

const client = new Sequelize('mysql://mysqluser:mysqlpass@mysqldb_products/products')

export default client