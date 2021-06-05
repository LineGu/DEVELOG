import { Response } from 'express';
import STATUS from '../constants/STATUS';

const errorHandler = (err: Error, response: Response): void => {
  if (err instanceof TypeError) {
    response.status(STATUS.CLIENT_ERROR).json();
    return;
  }
  response.status(STATUS.SERVER_ERROR).json();
};

export default errorHandler;
