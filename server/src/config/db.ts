import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'HyunGu12',
  database: process.env.DB_DBNAME || 'develog',
  synchronize: true,
  logging: true,
  entities: ['dist/src/entity/**/*.js'],
};

export const mysqlSessionOption = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
};

export default connectionOptions;
