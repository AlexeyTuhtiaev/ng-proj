import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {FormsModule} from '@angular/forms';
import { AddCarComponent } from './add-car/add-car.component';
import {BackgroundDirective} from './directives/background.directive';
import {PowPipe} from './pow.pipe';
import { CarFilterPipe } from './car-filter.pipe';
import {CarsService} from './cars.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    BackgroundDirective,
    PowPipe,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
