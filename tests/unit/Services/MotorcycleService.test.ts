import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const motorcycleMock: IMotorcycle = {
  id: '63c2ca03e01359077ec0d7b0',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
};

const updateMotorcycleMock: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
};

describe('Tests of Motorcycle Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should save a new motorcycle.', async function () {
    const requestInput: IMotorcycle = {
      model: 'Honda',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const expectedOutput: IMotorcycle = motorcycleMock;
  
    sinon.stub(Model, 'create').resolves(expectedOutput);

    const service = new MotorcycleService();
    const output = await service.create(requestInput);
    
    expect(output).to.be.deep.equal(expectedOutput);
  });

  it('should list all motorcycle.', async function () {
    const expectedOutput: IMotorcycle[] = [motorcycleMock];
  
    sinon.stub(Model, 'find').resolves(expectedOutput);

    const service = new MotorcycleService();
    const output = await service.findAll();
    
    expect(output).to.be.deep.equal(expectedOutput);
  });

  it('should list a motorcycle based on it\'s ID.', async function () {
    const id = '63c2ca03e01359077ec0d7b0';
    const expectedOutput: IMotorcycle = motorcycleMock;
  
    sinon.stub(Model, 'findById').resolves(expectedOutput);

    const service = new MotorcycleService();
    const output = await service.findById(id);
    
    expect(output).to.be.deep.equal(expectedOutput);
  });

  it('should fail to find a motorcycle based on it\'s ID.', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const service = new MotorcycleService();
    const output = await service.findById('INVALID_ID');
    
    expect(output).to.be.deep.equal(null);
  });

  it('should update a motorcycle based on it\'s ID.', async function () {
    const id = '63c2ca03e01359077ec0d7b0';
    const newProperties: IMotorcycle = updateMotorcycleMock;
    
    sinon.stub(Model, 'findByIdAndUpdate').resolves(newProperties);
  
    const service = new MotorcycleService();
    const output = await service.updateById(id, newProperties);
      
    expect(output).to.be.deep.equal(undefined);
  });

  it('should fail to update a motorcycle based on it\'s ID.', async function () {
    const newProperties: IMotorcycle = updateMotorcycleMock;
      
    sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
  
    const service = new MotorcycleService();
    const output = await service.updateById('INVALID_ID', newProperties);
      
    expect(output).to.be.equal(null);
  });
});