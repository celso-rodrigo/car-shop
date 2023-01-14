import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;
  
  constructor(carInfo: ICar) {
    super(carInfo);
    this.doorsQty = carInfo.doorsQty;
    this.seatsQty = carInfo.seatsQty;
  }
}

export default Car;