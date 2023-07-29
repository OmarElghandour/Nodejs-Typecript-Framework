import { Router } from 'express';
import IController from '../interfaces/IController';

abstract class BaseController implements IController {
    public router = Router();
    public abstract path : string;
    abstract initRoutes(): void;
}


export default BaseController;