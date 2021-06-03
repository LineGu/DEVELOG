import { Response } from 'express';
import STATUS from '@STATUS';

const errorHandler = (err: Error, response: Response) => {
  if (err instanceof TypeError) {
    response.status(STATUS.CLIENT_ERROR).json();
    return;
  }
  response.status(STATUS.SERVER_ERROR).json();
};

module.exports = errorHandler;
