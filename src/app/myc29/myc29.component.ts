import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc29',
  templateUrl: './myc29.component.html',
  styleUrls: ['./myc29.component.css']
})
export class Myc29Component {
  list:[]
  count: number = 100000
  //宣称number就是说返回值的类型如果没有返回值就写void,如果返回值随意就写any
  doClick(ev,el): void{
    this.count++;
  }

}
