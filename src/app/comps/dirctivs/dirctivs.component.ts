import { Component, OnInit } from '@angular/core';
import { SerService } from 'src/app/ser.service';

@Component({
  selector: 'app-dirctivs',
  templateUrl: './dirctivs.component.html',
  styleUrls: ['./dirctivs.component.css']
})
export class DirctivsComponent implements OnInit {
  arrr:number[]=[]

  constructor(public svc:SerService) { }

  ngOnInit() {
    this.arrr=this.svc.arr

  }

}
