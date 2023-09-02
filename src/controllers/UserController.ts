// plop-templates/controller.ts.hbs
import { Request, Response } from 'express';
import BaseController from "./BaseController";
import User from '../models/User';
import bcrypt  from 'bcrypt';
const saltRounds = 10;

export class UserController extends BaseController {
    public path: string;
    constructor() {
        super();
        this.path = '/user';
        this.initRoutes();
    }


    public initRoutes() {
        this.router.get('/', this.index);
        this.router.post('/create', this.create);
        this.router.patch('/update', this.update);
        this.router.post('/delete', this.delete);
    }

  async index(req: Request, res: Response) {
    // Add your controller logic here
    // Example:
    // const items = await ItemModel.find();
    // res.json(items);
  }

  async create(req: Request, res: Response) {

    console.log(req.body);

    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    try {
      const user = new User({
        username : req.body.username,
        email: req.body.email,
        password : hashedPassword,
      });


      await user.save();

      res.send('usre created successfuly');
    } catch(err) {
      console.log(err);
    }
      // Add your controller logic here
  }

  async update(req: Request, res: Response) {
    // Add your controller logic here
  }

  async delete(req: Request, res: Response) {
    // Add your controller logic here
  }
}
