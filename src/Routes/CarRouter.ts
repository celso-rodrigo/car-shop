import { Router } from 'express';
import CarController from '../Controllers/CarController';
import VerifyMongoId from '../Middlewares/VerifyMongoId';

const carRouter = Router();

carRouter.get(
  '/',
  (req, res, next) => new CarController(req, res, next).findAll(),
);

carRouter.get(
  '/:id',
  (req, res, next) => new VerifyMongoId(req, res, next).verify(),
  (req, res, next) => new CarController(req, res, next).findById(),
);

carRouter.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);

carRouter.put(
  '/:id',
  (req, res, next) => new VerifyMongoId(req, res, next).verify(),
  (req, res, next) => new CarController(req, res, next).updateById(),
);

export default carRouter;