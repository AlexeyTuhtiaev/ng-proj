import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carName='def';
  carYear=2000;
  @Output('onAddCar') carEmmitter = new EventEmitter<{name: string, year: number}>();

  constructor() { }

  ngOnInit() {
  }

  addCar() {
    this.carEmmitter.emit({
      name: this.carName,
      year: this.carYear
    });

    this.carName='';
  }

}
