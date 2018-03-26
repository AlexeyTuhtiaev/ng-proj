import {Component} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  // styleUrls: ['./car.component.css']
  styles: [`
    h1, h2 {
      color: red;
    }`]
})
export class CarComponent {
  carName = 'BMW';
  carYear = 2017;

  getName() {
    return this.carName;
  }
}
