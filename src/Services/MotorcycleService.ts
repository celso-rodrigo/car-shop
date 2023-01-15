import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private formatQueryResult(queryResult: IMotorcycle) {
    return ({
      id: queryResult.id,
      model: queryResult.model,
      year: queryResult.year,
      color: queryResult.color,
      status: queryResult.status,
      buyValue: queryResult.buyValue,
      category: queryResult.category,
      engineCapacity: queryResult.engineCapacity,
    });
  }
  
  async create(motorcycle: IMotorcycle): Promise<Motorcycle> {
    const motorcycleODM = new MotorcycleODM();
    const result = await motorcycleODM.create(motorcycle);   
    return new Motorcycle(result);
  }

  async findAll(): Promise<IMotorcycle[]> {
    const motorcycleODM = new MotorcycleODM();
    const result = await motorcycleODM.findAll();   
    return result.map((motorcycle) => this.formatQueryResult(motorcycle));
  }

  async findById(id: string): Promise<IMotorcycle | null> {
    const motorcycleODM = new MotorcycleODM();
    const result = await motorcycleODM.findById(id); 
    if (result === null) return result; 
    return this.formatQueryResult(result);
  }

  async updateById(id: string, motorCycleProperties: IMotorcycle): Promise<null | void> {
    const motorcycleODM = new MotorcycleODM();
    const result = await motorcycleODM.updateMotorcycleById(id, motorCycleProperties); 
    if (result === null) return result;
  }
}

export default MotorcycleService;