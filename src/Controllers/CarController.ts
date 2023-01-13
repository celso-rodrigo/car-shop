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

  async create(): Promise<void> {
    try {
      const { model, year, color, buyValue, doorsQty, seatsQty } = this._req.body;
      const car: ICar = {
        model, year, color, buyValue, doorsQty, seatsQty, status: this._req.body.status || false };
      const result = await this._service.create(car);
      this._res.status(201).json(result);
    } catch (err) {
      this._next(err);
    }
  }

  async findAll(): Promise<void> {
    try {
      const result = await this._service.findAll();
      this._res.status(200).json(result);
    } catch (err) {
      this._next(err);
    }
  }

  async findById(): Promise<Response | void> {
    try {
      const { id } = this._req.params;
      const idRegex = /^[a-f\d]{24}$/i;
      if (!idRegex.test(id)) return this._res.status(422).json({ message: 'Invalid mongo id' });
      const result = await this._service.findById(id);
      if (result === null) return this._res.status(404).json({ message: 'Car not found' });
      return this._res.status(200).json(result);
    } catch (err) {
      this._next(err);
    }
  }
}

export default CarController;