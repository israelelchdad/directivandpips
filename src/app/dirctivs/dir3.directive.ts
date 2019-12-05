import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDir3]'
})
export class Dir3Directive {
  private el:HTMLElement

  constructor(elem:ElementRef) {
    this.el=elem.nativeElement
   }
   @HostListener('click') onfont(){
     this.el.style.fontSize='40px'
   }

}
