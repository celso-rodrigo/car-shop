import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private formatQueryResult(queryResult: ICar) {
    return ({
      id: queryResult.id,
      model: queryResult.model,
      year: queryResult.year,
      color: queryResult.color,
      status: queryResult.status,
      buyValue: queryResult.buyValue,
      doorsQty: queryResult.doorsQty,
      seatsQty: queryResult.seatsQty,
    });
  }

  async create(car: ICar): Promise<Car> {
    const carODM = new CarODM();
    const result = await carODM.create(car);   
    return new Car(result);
  }

  async findAll(): Promise<ICar[]> {
    const carODM = new CarODM();
    const result = await carODM.findAll();
    return result.map((car) => this.formatQueryResult(car));
  }

  async findById(id: string): Promise<ICar | null> {
    const carODM = new CarODM();
    const result = await carODM.findById(id);
    if (result === null) return null;
    return this.formatQueryResult(result);
  }

  async updateById(id: string, carProperties: ICar): Promise<undefined | null> {
    const carODM = new CarODM();
    const result = await carODM.updateCarById(id, carProperties);
    if (result === null) return null;
  }
}

export default CarService;