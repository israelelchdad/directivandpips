import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pipsim',
  templateUrl: './pipsim.component.html',
  styleUrls: ['./pipsim.component.css']
})
export class PipsimComponent implements OnInit {
   arrr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
   arr2=[3,5,2,6,8,19,23,46,13]
   

   t1=new FormControl('')
   t2=new Date();
   t3=new FormControl('')
   t4=new FormControl('')
   t5=new FormControl('')
   t6=new FormControl('')
   t7=new FormControl('')
   t8=new FormControl('')
   t9=new FormControl('')
   t10=new FormControl('')

  constructor() { }

  ngOnInit() {
  }

}
