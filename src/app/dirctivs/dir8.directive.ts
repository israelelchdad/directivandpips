import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDir8]'
})
export class Dir8Directive {
  private inp:HTMLElement
  constructor(private el:ElementRef) { 

  }
  @HostListener('input') oninput(){

    let val=this.el.nativeElement.value
    if(val>9){
      alert('i big more 9 ')
    }else{
      console.log(' i small from 9 i am =',this.el.nativeElement.value);

    }
   

  }

}
