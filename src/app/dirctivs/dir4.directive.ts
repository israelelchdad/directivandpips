import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDir4]'
})
export class Dir4Directive {
  private el:HTMLElement

  constructor(ELAM:ElementRef) { 
    this.el=ELAM.nativeElement
  }
  @HostListener('mouseenter') opac(){
    this.el.style.opacity='0.1'
  }
  @HostListener('click') opaccl(){
    this.el.style.opacity='1'
    console.log("clic");
    
  }

}
