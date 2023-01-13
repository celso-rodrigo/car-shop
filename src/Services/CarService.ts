import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  async create(car: ICar) {
    const carODM = new CarODM();
    const result = await carODM.create(car);   
    return new Car(result);
  }
}

export default CarService;