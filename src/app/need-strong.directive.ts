import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNeedStrong]'
})
export class NeedStrongDirective {
  constructor(el:ElementRef) { 
    // 参数el指代当前应用了当前指令的HTML元素
    console.log("指令的构造方法");
    console.log(el);
    // el.nativeElement.样式
  }

}
