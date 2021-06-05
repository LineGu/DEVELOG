import * as session from 'express-session';
import dotenv from 'dotenv';
import { cookieOptions } from './cookie';
import { mysqlSessionOption } from '../config/db';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ExpressMySqlSession = require('express-mysql-session')(session);

dotenv.config();

const sessionStore = new ExpressMySqlSession(mysqlSessionOption);

export const sessionOptions = {
  name: process.env.SESSION_NAME,
  secret: process.env.SESSION_SECRET as string,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: cookieOptions,
};
