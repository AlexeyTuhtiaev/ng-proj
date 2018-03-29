export class CarsService {
  cars = [
    {name: 'Ford', isSold: false},
    {name: 'Mazda', isSold: true},
    {name: 'Bently', isSold: false},
    {name: 'Audi', isSold: false},
    {name: 'Mersedes', isSold: false}
  ];

  addCar(name:string) {
    this.cars.push({
      name,
      isSold:false
    });
  }
}
