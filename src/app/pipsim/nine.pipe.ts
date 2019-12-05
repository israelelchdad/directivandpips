import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nine'
})
export class NinePipe implements PipeTransform {

  transform(value:number ,arr: number[]): number [] {
    let arr1=[]

    for (let index = 0; index < value; index++) {
      arr1.push(arr[index])
      
      
    }

    return arr1;
  }

}
