import {Component, EventEmitter, Output} from '@angular/core';
import {strictEqual} from 'assert';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent  {
@Output () onCarAdd = new EventEmitter<string>();
carName='';

addCar() {
  this.onCarAdd.emit(this.carName);
  this.carName='';
}

}
