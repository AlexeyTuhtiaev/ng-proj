import { Component } from '@angular/core';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

 cars = [
   {name: 'Ford', isSold: false},
   {name: 'Mazda', isSold: true},
   {name: 'Bently', isSold: false},
   {name: 'Audi', isSold: false},
   {name: 'Mersedes', isSold: false}
   ];

  searchCar='';


  addCarToList() {
    this.cars.push({
      name: 'New Car',
      isSold:false
    });
  }
}
