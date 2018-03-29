import {Component, EventEmitter, Output} from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})

export class AddCarComponent  {

  carName='';

  constructor(private service: CarsService){}

  addCar() {
    this.service.addCar(this.carName);
    this.carName='';
  }
}
