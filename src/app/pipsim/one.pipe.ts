import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'one'
})
export class OnePipe implements PipeTransform {
  

  transform(str:string): string {
   
    str=str[0].toUpperCase()+str.substr(1,str.length)
   
    return str
  }

}
