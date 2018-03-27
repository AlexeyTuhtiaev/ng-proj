import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName='';
  addCarStatus=false;
  cars=['Ford', 'Audi', 'BMW'];
  items = [{id:3, name: 'item1'},
            {id:4, name: 'item4'},
            {id:7, name: 'item7'}];

  constructor() {
  }

  addCar(){
    this.addCarStatus=true;
    this.cars.push(this.carName);
  }

}
