import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  
  constructor(vehiclecleInfo: IVehicle) {
    this.id = vehiclecleInfo.id;
    this.model = vehiclecleInfo.model;
    this.year = vehiclecleInfo.year;
    this.color = vehiclecleInfo.color;
    this.status = vehiclecleInfo.status;
    this.buyValue = vehiclecleInfo.buyValue;
  }
}

export default Vehicle;