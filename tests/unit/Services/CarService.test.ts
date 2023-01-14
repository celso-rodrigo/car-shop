import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Tests of CarService', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should save a new car.', async function () {
    const requestInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const expectedOutput: ICar = {
      id: '63c2a9020044677f9039a4f5',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: false,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
  
    sinon.stub(Model, 'create').resolves(expectedOutput);

    const service = new CarService();
    const output = await service.create(requestInput);
    
    expect(output).to.be.deep.equal(expectedOutput);
  });

  it('should list all cars.', async function () {
    const expectedOutput: ICar[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        status: false,
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];
      
    sinon.stub(Model, 'find').resolves(expectedOutput);

    const service = new CarService();
    const output = await service.findAll();
    
    expect(output).to.be.deep.equal(expectedOutput);
  });

  it('should get a car based on it\'s id.', async function () {
    const id = '63c2a9020044677f9039a4f5';
    const expectedOutput: ICar = {
      id,
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: false,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    
    sinon.stub(Model, 'findById').resolves(expectedOutput);
  
    const service = new CarService();
    const output = await service.findById(id);
      
    expect(output).to.be.deep.equal(expectedOutput);
  });

  it('should fail to get a car based on it\'s id.', async function () {
    sinon.stub(Model, 'findById').resolves(null);
  
    const service = new CarService();
    const output = await service.findById('INVALID_ID');
      
    expect(output).to.be.equal(null);
  });

  it('should update a car based on it\'s id.', async function () {
    const id = '63c2a9020044677f9039a4f5';
    const expectedOutput: ICar = {
      id,
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };
    
    sinon.stub(Model, 'findByIdAndUpdate').resolves(expectedOutput);
  
    const service = new CarService();
    const output = await service.updateById(id, expectedOutput);
      
    expect(output).to.be.deep.equal(undefined);
  });

  it('should fail to update a car based on it\'s id.', async function () {
    const newProperties: ICar = {
      id: '63c2a9020044677f9039a4f5',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };
      
    sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
  
    const service = new CarService();
    const output = await service.updateById('INVALID_ID', newProperties);
      
    expect(output).to.be.equal(null);
  });
});