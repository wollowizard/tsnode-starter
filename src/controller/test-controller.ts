import * as express from 'express';
import asyncH from 'express-async-handler';
import { RestError } from '../model/rest-error';

class TestController {
  public router = express.Router();

  constructor() {
    this.router.use('/endpoint', asyncH(this.testEndpoint));
  }

  private testEndpoint = async (req: express.Request, res: express.Response) => {
    try {
      const a = false;
      if (a) {
        throw new Error('Something went wrong');
      }
    } catch (e) {
      throw new RestError(500, 'ERROR', 'This is an error', e);
    }
    res.json({ hello: 'world' });
  };

}

const testController = new TestController();
export default testController;
