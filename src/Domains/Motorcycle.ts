import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;
  
  constructor(motorcycleInfo: IMotorcycle) {
    super(motorcycleInfo);
    this.category = motorcycleInfo.category;
    this.engineCapacity = motorcycleInfo.engineCapacity;
  }
}

export default Motorcycle;