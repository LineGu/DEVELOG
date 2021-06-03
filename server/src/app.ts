import express, { Express } from 'express';
import initializer from './initialize/index';

const startServer = (): void => {
  const app: Express = express();
  initializer(app);
  const { SERVER_PORT } = process.env;
  app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is open`));
};

startServer();

export default startServer;
