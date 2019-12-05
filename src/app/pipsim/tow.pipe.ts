import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tow'
})
export class TowPipe implements PipeTransform {

  transform(d:Date): string {
    let datestring=d.getFullYear()+":"+d.getMonth()+":"+d.getDay()
    return  datestring ;
  }

}
