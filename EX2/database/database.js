// database/database.js
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_Name,
  process.env.DB_User,
  process.env.DB_Password,
  {
    host: process.env.DB_Host,
    port: process.env.DB_Port,
    dialect: 'mysql',
    logging: false
  }
);

export default sequelize;
