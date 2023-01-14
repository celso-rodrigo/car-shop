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

  private formatCar(): ICar {
    const { model, year, color, buyValue, doorsQty, seatsQty } = this._req.body;
    return {
      model, year, color, buyValue, doorsQty, seatsQty, status: this._req.body.status || false };
  }

  async create(): Promise<void> {
    try {
      const car = this.formatCar();
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
      const result = await this._service.findById(id);
      if (result === null) return this._res.status(404).json({ message: 'Car not found' });
      return this._res.status(200).json(result);
    } catch (err) {
      this._next(err);
    }
  }

  async updateById(): Promise<Response | void> {
    try {
      const { id } = this._req.params;
      const car = this.formatCar();
      const result = await this._service.updateById(id, car);
      if (result === null) return this._res.status(404).json({ message: 'Car not found' });
      return this._res.status(200).json({ id, ...car });
    } catch (err) {
      this._next(err);
    }
  }
}

export default CarController;