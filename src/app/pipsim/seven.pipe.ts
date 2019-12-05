import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seven'
})
export class SevenPipe implements PipeTransform {

  transform(value: any): any {
    return ++value;
  }

}
