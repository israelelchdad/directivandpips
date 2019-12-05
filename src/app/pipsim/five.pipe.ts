import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'five'
})
export class FivePipe implements PipeTransform {

  transform(str:string): any {
    str=str.toLowerCase()
   
    return str
   
  }

}
