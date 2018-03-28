import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'appPow'
})
export class PowPipe implements PipeTransform{

  transform(value: any, powNumber: number = 1, sumb: string = '') {
    return sumb + Math.pow(value,powNumber);
  }

}
