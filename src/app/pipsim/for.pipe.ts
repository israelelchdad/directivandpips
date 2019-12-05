import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'for'
})
export class ForPipe implements PipeTransform {

  transform(str:string): string {
    str=str[0].toLowerCase()+str.substr(1,str.length)
   
    return str
  }

}
