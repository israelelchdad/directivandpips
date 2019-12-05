import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ten'
})
export class TenPipe implements PipeTransform {

  transform(value: any, arr: any[]): any[] {
    let arrr = arr.filter(d => {
      return d == value
    })

    return arrr;
  }

}
