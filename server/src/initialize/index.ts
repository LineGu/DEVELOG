import { Express } from 'express';
import expressInitializer from './express';
import envInitializer from './env';

const initializer = (app: Express): void => {
  envInitializer();
  expressInitializer.init(app);
};

export default initializer;
