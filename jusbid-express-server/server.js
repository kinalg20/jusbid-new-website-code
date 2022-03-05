import { APP_PORT } from './config';
import router from './routes';
import cron from 'node-cron';
import colors from "colors";
import express from "./config/express";

import webSocket from './config/web.socket.io';

import { utility } from './common';

const app = express();
const httpServer = webSocket(app);

cron.schedule('* * * * * *', () => {

  let time = utility.getCurrentDate();
  let cdate = utility.convertUTC('04/22/98');
  console.log('Server is running fine... =>', time, cdate);

});

app.use('/api', router);

// Welcome page for api
app.use('/', (req, res) => {
  res.send(`
  <h1>Jusbid Server Start</h1>
  `);
});

// Server initialization
const PORT = process.env.PORT || APP_PORT;
httpServer.listen(PORT, () => {
  console.log(colors.green(`Server is running on port ${PORT}`));
});