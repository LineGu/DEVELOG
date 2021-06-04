import { Express } from 'express';
import expressInitializer from './express';
import envInitializer from './env';
import dbInitializer from './db';

const initializer = async (app: Express): Promise<void> => {
  envInitializer();
  expressInitializer.init(app);
  await dbInitializer();
};

export default initializer;
