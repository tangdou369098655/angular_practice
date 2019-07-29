import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myang3',
  templateUrl: './myang3.component.html',
  styleUrls: ['./myang3.component.css']
})
export class Myang3Component  {
userName = "dingding"
userPwd = ""
userPwdMsg = ""
doChange(){
  console.log(this.userName)
}
doPwdChange(){
  if(this.userPwd===""){
    this.userPwdMsg="密码不能为空"
  }else if(this.userPwd.length<6){
    this.userPwdMsg="密码不能少于6位"
  }else if(this.userPwd.length>6){
    this.userPwdMsg="密码不能长于12位"
  }else{
    this.userPwdMsg="密码长度合法"
  }
}

// 模型数据 Model
todoList = ["开会","采购"]; //代办事项
userInput = ''; //用户输入
doAdd(){
  this.todoList.push(this.userInput)
  
}

doDelete(i){
  this.todoList.splice(i,1)
}
uname="tom Hsdfs"
}
