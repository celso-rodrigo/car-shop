import { NextFunction, Request, Response } from 'express';

class VerifyMongoId {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
  }

  verify(): Response | void { 
    const { id } = this._req.params;
    const idRegex = /^[a-f\d]{24}$/i;
    if (!idRegex.test(id)) return this._res.status(422).json({ message: 'Invalid mongo id' });
    this._next();
  }
}

export default VerifyMongoId;