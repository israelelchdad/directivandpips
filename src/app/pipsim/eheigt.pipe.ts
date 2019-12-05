import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eheigt'
})
export class EheigtPipe implements PipeTransform {

  transform(value: any): any {
    return --value;
  }

}
