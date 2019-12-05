import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'six'
})
export class SixPipe implements PipeTransform {

  transform(value: any): any {
    return  "heloo   " +value;
  }

}
