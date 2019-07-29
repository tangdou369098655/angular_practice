import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe {
//所有的管道必须提供一个transform的方法
//用于获得数据，转换为另一种格式
  transform(val,lang='zh'): any {
    if(lang=='zh'){
      if(val==0){
        return '女'
      }else if(val==1){
        return '男'
      }else {
        return '不详'
      }
    }else if(lang=='en'){
      if(val==0){
        return '女'
      }else if(val==1){
        return '男'
      }else {
        return '不详'
      }

    }
  }

}
