import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myhomework',
  templateUrl: './myhomework.component.html',
  styleUrls: ['./myhomework.component.css']
})
export class MyhomeworkComponent  {
  productList:Array<object> = [
    {
      pid:1001,
      pname:'戴尔7001系列',
      pic:'../../assets/1.jpg',
      isOnsale:true,
      pirthday:32323222
    },{
      pid:1002,
      pname:'戴尔7002系列',
      pic:'../../assets/2.jpg',
      isOnsale:true,
      pirthday:32322332
    }, {
      pid:1003,
      pname:'戴尔7003系列',
      pic:'../../assets/3.jpg',
      isOnsale:true,
      pirthday:32132332
    }, {
      pid:1004,
      pname:'戴尔7004系列',
      pic:'../../assets/4.jpg',
      isOnsale:true,
      pirthday:32132332
    }, {
      pid:1005,
      pname:'戴尔7005系列',
      pic:'../../assets/5.jpg',
      isOnsale:true,
      pirthday:32132332
    }]

  doDelete(i){
    console.log(i);
    this.productList.splice(i,1);//从i位置删除一个
  }
  // 用户等级
  userLevel:number = 2

  //强调显示的样式对象
  myStyleObj = {
    'font-weight':'bold',
    'color':'red'
  }
  // 控制样式class的对象
  myClassObj={
    'show':false,
    'hide':false
  }
}