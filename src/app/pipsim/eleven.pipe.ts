import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eleven'
})
export class ElevenPipe implements PipeTransform {

  transform(arr: any[]): any {
let m=Math.max(...arr);


    return m;
  }

}
