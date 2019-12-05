import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'three'
})
export class ThreePipe implements PipeTransform {

  transform(str:string): string {
    str=str.toUpperCase()
   
    return str
   
  }

}
