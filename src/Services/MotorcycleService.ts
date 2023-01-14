import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/CarODM copy';

class MotorcycleService {
  async create(motorcycle: IMotorcycle): Promise<Motorcycle> {
    const motorcycleODM = new MotorcycleODM();
    const result = await motorcycleODM.create(motorcycle);   
    return new Motorcycle(result);
  }
}

export default MotorcycleService;