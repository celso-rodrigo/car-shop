import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Tests of Motorcycle Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should save a new Motorcycle.', async function () {
    const requestInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const expectedOutput: IMotorcycle = {
      id: '63c2ca03e01359077ec0d7b0',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };
  
    sinon.stub(Model, 'create').resolves(expectedOutput);

    const service = new MotorcycleService();
    const output = await service.create(requestInput);
    
    expect(output).to.be.deep.equal(expectedOutput);
  });

  it('should list all Motorcycles.', async function () {
    const expectedOutput: IMotorcycle[] = [{
      id: '63c2ca03e01359077ec0d7b0',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    }];
  
    sinon.stub(Model, 'find').resolves(expectedOutput);

    const service = new MotorcycleService();
    const output = await service.findAll();
    
    expect(output).to.be.deep.equal(expectedOutput);
  });

  it('should list a Motorcycle based on it\'s ID.', async function () {
    const id = '63c2ca03e01359077ec0d7b0';
    const expectedOutput: IMotorcycle = {
      id,
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };
  
    sinon.stub(Model, 'findById').resolves(expectedOutput);

    const service = new MotorcycleService();
    const output = await service.findById(id);
    
    expect(output).to.be.deep.equal(expectedOutput);
  });

  it('should fail to find a Motorcycle based on it\'s ID.', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const service = new MotorcycleService();
    const output = await service.findById('INVALID_ID');
    
    expect(output).to.be.deep.equal(null);
  });
});