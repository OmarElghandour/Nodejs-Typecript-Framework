import express, {Application} from 'express';
import contollers from './web';
import IController from '../src/interfaces/IController';
import path from 'path';
import fs from 'fs';


class App {
    private port;
    private app;
    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.initWebServer();
        this.initControllers();
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

}

export default App;