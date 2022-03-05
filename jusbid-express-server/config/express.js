import express from 'express';
import path from 'path';
import cors from 'cors';
import errorHandler from '../middlewares/errorHandler';

import getDBConnection from './db';

const initApp = () => {

    let app = express();

    getDBConnection()

    global.appRoot = path.resolve(__dirname);
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // Save media files here
    app.use('/uploads', express.static('uploads'));
    // Middleware for error handling
    app.use(errorHandler);

    return app;

};

export default initApp;