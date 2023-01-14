import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
// import VerifyMongoId from '../Middlewares/VerifyMongoId';

const motorcycleRouter = Router();

motorcycleRouter.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

export default motorcycleRouter;