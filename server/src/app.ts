import express, { Express } from 'express';
import initializer from './initialize/index';

const startServer = async (): Promise<void> => {
  const app: Express = express();
  await initializer(app);
  const { SERVER_PORT } = process.env;

  app.listen(SERVER_PORT, async () => {
    console.log(`${SERVER_PORT} is open`);
  });
};

startServer();

export default startServer;
