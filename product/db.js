import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres://postgresuser:postgrespass@postgresql_products:5432/products', {dialect:'postgres'})

export default sequelize;