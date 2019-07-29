import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myang2',
  templateUrl: './myang2.component.html',
  styleUrls: ['./myang2.component.css']
})
export class Myang2Component   {
  themeObj={
    blueTheme:true,
    greenTheme:false,
    darkTheme:false,
  }
  changeTheme(theme){
    for(let p in this.themeObj){
      if(p===theme){
        this.themeObj[p]=true;
      }else{
        this.themeObj[p]=false;
      }
    }
  }

}
