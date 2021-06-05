import { createConnection } from 'typeorm';
import connectionOptions from '../config/db';

const dbInitializer = async (): Promise<void> => {
  try {
    await createConnection(connectionOptions);
    console.log('DB Connection Success');
  } catch (err) {
    console.log(err);
  }
};

export default dbInitializer;
