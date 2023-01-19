import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const client = new Sequelize(process.env.DATABASE_URL)

export default client