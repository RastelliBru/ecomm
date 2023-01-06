
import { Sequelize }from 'sequelize'
import express from 'express';



const app = express();
const sequelize = new Sequelize('mysql://mysqluser:mysqlpass@mysqldb_products:3316/product')


const testConnection = async() => {

 try {
   await sequelize.authenticate();
   console.log('Connection has been established successfully.');
 } catch (error) {
   console.error('Unable to connect to the database:', error);
 }
 return testConnection
}



export async function saveProduct(produto) {
  products.push(produto);
  return produto;
}

export async function findProduct() {
  const listProducts = products;
  return listProducts;
}

testConnection()