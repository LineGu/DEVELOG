import { ConnectionOptions } from 'typeorm';

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

export default connectionOptions;
