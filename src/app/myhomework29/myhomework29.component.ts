import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myhomework29',
  templateUrl: './myhomework29.component.html',
  styleUrls: ['./myhomework29.component.css']
})
export class Myhomework29Component  {
  uname: string=''
  unameMsg: string = '用户名3-9位'
  unameClass: string='primary'
  upwd: string=''
  doSubmit():void {

  }
  doUnameChange():void{
    if(this.uname.length<3){
      this.unameMsg = '用户名长度太短了'
      this.unameClass='err'
    }else if(this.uname.length>9){
      this.unameMsg='用户名长度太长了'
      this.unameClass='err'
    }else{
      this.unameMsg='长度合适'
      this.unameClass='success'
    }
  }
}
