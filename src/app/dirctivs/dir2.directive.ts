import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDir2]'
})
export class Dir2Directive {
  private  elem:HTMLElement

  constructor(el:ElementRef) {
    this.elem=el.nativeElement
   }
   @HostListener('mouseenter')hoverhiden(){
     this.elem.style.display="none"
   }

}
