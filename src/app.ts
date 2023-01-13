import express, { NextFunction, Request, Response } from 'express';
import routes from './Routes';

const app = express();
app.use(express.json());

app.use('/cars', routes.carRouter);

app.use((_error: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;
