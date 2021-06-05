import { Express } from 'express';
import cors from 'cors';
import session from 'express-session';
import bodyParser from 'body-parser';
import corsOption from '../config/cors';
import { sessionOptions } from '../config/session';
import about from '../routes/about';
import blog from '../routes/blog';
import contact from '../routes/contact';
import portfolio from '../routes/portfolio';

const expressInitializer = {
  init(app: Express): void {
    app.use(cors(corsOption));
    app.use(session(sessionOptions));
    app.use(bodyParser.json());
    app.use('/about', about);
    app.use('/blog', blog);
    app.use('/contact', contact);
    app.use('/portfolio', portfolio);
  },
};

export default expressInitializer;
