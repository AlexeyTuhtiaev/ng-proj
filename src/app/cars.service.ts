import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';

@Injectable()
export class CarsService {

  constructor(private consoleService: ConsoleService) {}

  cars = [
    {name: 'Ford', isSold: false},
    {name: 'Mazda', isSold: true},
    {name: 'Bently', isSold: false},
    {name: 'Audi', isSold: false},
    {name: 'Mersedes', isSold: false}
  ];

  addCar(name:string) {
    this.cars.push({name,isSold:false });
    this.consoleService.log(`Car ${name} was added`);
  }
}
