import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
// import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private _service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this._service = new MotorcycleService();
  }

  private formatMotorcycle(): IMotorcycle {
    const { model, year, color, buyValue, category, engineCapacity } = this._req.body;
    return {
      model,
      year,
      color,
      buyValue,
      category,
      engineCapacity,
      status: this._req.body.status || false };
  }
  
  async create(): Promise<void> {
    try {
      const motorcycle = this.formatMotorcycle();
      const result = await this._service.create(motorcycle);
      this._res.status(201).json(result);
    } catch (err) {
      this._next(err);
    }
  }
}

export default MotorcycleController;