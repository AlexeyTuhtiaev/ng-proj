import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName='';
  carYear=2000;
  cars:[{name:string, year:number}]=[{name:'Ford',year:2015}];
  dates=[
    new Date(2015,3,5),
    new Date(2011,4,6),
    new Date(2017,5,8),
    new Date(2000,8,5),
    new Date(2200,5,9)
  ];
  constructor() {
  }

  addCar(){

    this.cars.push({name:this.carName, year:this.carYear});
  }

}
