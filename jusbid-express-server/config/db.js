import { DB_URL } from './index';
import mongoose from 'mongoose';
import colors from "colors";

const getDBConnection = () => {

    // Database connection
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log(colors.green('DB connected...'));
    });

};

export default getDBConnection;