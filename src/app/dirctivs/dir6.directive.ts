import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDir6]'
})
export class Dir6Directive {

  constructor() { }
  @HostListener('blur')onbla (){
    alert('dont leveme')
  }

}
