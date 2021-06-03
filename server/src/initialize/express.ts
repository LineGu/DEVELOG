import { Express } from 'express';
import cors from 'cors';
import corsOption from '../config/cors';

const expressInitializer = {
  init(app: Express): void {
    app.use(cors(corsOption));
  },
};

export default expressInitializer;
