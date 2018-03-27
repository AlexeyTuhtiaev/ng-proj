import {Component, ContentChild, ElementRef, Input, ViewChild} from '@angular/core';

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
  @Input('carItem') car: {name: string, year: number};
  @ContentChild('carHeading') carHeading:ElementRef;
  private carItem = false;


  ngAfterViewInit() {
    console.log(this.carHeading);
  }
}
