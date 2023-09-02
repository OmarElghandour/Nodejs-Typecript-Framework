import express, {Application} from 'express';
import contollers from './web';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';

class App {
    private port;
    private app;
    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.initMiddlewares();
        this.initWebServer();
        this.initControllers();
        this.initMongoConnection();
    }


    private initControllers() {
        contollers.forEach((contoller) => {
            const instance = new contoller();
            this.app.use(instance.path, instance.router);
        });
    }

    private initWebServer() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        });
    }

    initMiddlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
    }

    async initMongoConnection() {
        await connect('mongodb://127.0.0.1:27017/test');
    }
}

export default App;