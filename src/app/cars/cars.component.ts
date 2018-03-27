import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName='';
  addCarStatus=false;
  cars=['Ford', 'Audi', 'BMW','Mazda', 'Audi', 'Bentley'];

  constructor() {
  }

  addCar(){
    this.addCarStatus=true;
    this.cars.push(this.carName);
  }
  setBigCarText(car: string){
    return car.length>4 ? true: false
  }

}
