import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private _service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this._service = new CarService();
  }

  async create() {
    try {
      const { model, year, color, buyValue, doorsQty, seatsQty } = this._req.body;
      const car: ICar = {
        model, year, color, buyValue, doorsQty, seatsQty, status: this._req.body.status || false };
      const result = await this._service.create(car);
      return this._res.status(201).json(result);
    } catch (err) {
      return this._res.status(400).json({ message: 'Bad Request' });
    }
  }
}

export default CarController;