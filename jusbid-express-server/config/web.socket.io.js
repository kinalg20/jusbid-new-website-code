import { createServer } from "http";
import { Server } from "socket.io";
import cron from 'node-cron';
import { utility } from "../common";

const webSocket = (app) => {

    const httpServer = createServer(app);

    const io = new Server(httpServer, {
        cors: {
            origin: ["http://localhost:4200", "http://127.0.0.1:4200",],
            credentials: true
        }
    });

    io.on('connection', (socket) => {
        console.log("Web socket connected...");
        // socket.emit('test event', {
        //     bidID: "BidID_is_here new data added"
        // })

        cron.schedule('* * * * * *', () => {

            let d = utility.getCurrentDate();
            // console.log('running a task every secound', d);
            socket.emit('test event', {
                bidID: "BidID_is_here new data added",
                data: d
            })

        });

    });

    return httpServer;

}

export default webSocket;