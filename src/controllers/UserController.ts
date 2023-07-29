import { Request, Response } from 'express';
import RouteDecorator from '../Decorator/RouteDecorator';
import BaseController from "./BaseController";

class UserController extends BaseController {
    public path: string;
    constructor() {
        super();
        this.path = '/user';
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get('/user', this.create);
        this.router.get('/get', this.getUser);
    }

    create() {
        return 'create method';
    }

    getUser(request: Request, response: Response) : void {
        response.send("some user");
    }
}

export default UserController;