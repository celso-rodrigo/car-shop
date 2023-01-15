import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import VerifyMongoId from '../Middlewares/VerifyMongoId';

const motorcycleRouter = Router();

motorcycleRouter.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).findAll(),
);

motorcycleRouter.get(
  '/:id',
  (req, res, next) => new VerifyMongoId(req, res, next).verify(),
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);

motorcycleRouter.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

motorcycleRouter.put(
  '/:id',
  (req, res, next) => new VerifyMongoId(req, res, next).verify(),
  (req, res, next) => new MotorcycleController(req, res, next).updateById(),
);

export default motorcycleRouter;