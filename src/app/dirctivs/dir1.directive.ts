import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDir1]'
})
export class Dir1Directive {

  @Input() color:string

  private  elem:HTMLElement
  constructor(el:ElementRef) {

    this.elem=el.nativeElement
    console.log(this.color);
    
   }
   @HostListener('click')  chengecolor(){
     this.elem.style.background="green";
     
   }
   @HostListener('mouseenter') onmouse(){
    this.elem.style.background=this.color

   }

}
