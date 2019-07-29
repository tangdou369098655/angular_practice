import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zzmm'
})
export class ZzmmPipe {
  //所有的管道必须提供一个transform的方法
  //用于获得数据，转换为另一种格式
    transform(val,short=true): any {
      var result = ''
      if(val==1){
        if(short){
          return  result = '党员'
        }else {
          return  result ='中国共产党党员'
        }
      }else if(val==2){
        if(short){
          return  result = '团员'
        }else {
          return  result ='中国共青团团员'
        }
      }else if(val==3){
        if(short){
          return  result = '群众'
        }else {
          return result ='中国群众'
        }
      }
      }
  }
  