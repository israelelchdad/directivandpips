import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twelve'
})
export class TwelvePipe implements PipeTransform {

  transform(arr: any[]): any {
    let m=Math.min(...arr);


    return m;
    
  }

}
