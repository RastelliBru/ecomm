import { Sequelize } from "sequelize";

const client = new Sequelize('postgres://postgresuser:postgrespass@postgresql_products:5432/products', {dialect:'postgres'})

export default client