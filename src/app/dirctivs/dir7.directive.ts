import { Directive, HostListener, ElementRef } from '@angular/core';
import { SerService } from '../ser.service';

@Directive({
  selector: '[appDir7]'
})
export class Dir7Directive {
  private el:HTMLElement



  constructor(public svc:SerService,private elem:ElementRef) {
    this.el=this.elem.nativeElement
   }
  @HostListener('change')chengofselect(){
      alert('arrae cheng')
     
      this.chengarr()

  }
  chengarr(){
    this.svc.arr.push(this.elem.nativeElement.value)

  }

}
