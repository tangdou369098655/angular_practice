import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyhomeworkComponent } from './myhomework/myhomework.component';
import { Myang2Component } from './myang2/myang2.component';
import { NeedStrongDirective } from './need-strong.directive';
import { Myang3Component } from './myang3/myang3.component';
import { Myc29Component } from './myc29/myc29.component';
import { Myhomework29Component } from './myhomework29/myhomework29.component';
import { MypipeComponent } from './mypipe/mypipe.component';
import { SexPipe } from './sex.pipe';
import { ZzmmPipe } from './zzmm.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildblogComponent } from './childblog/childblog.component';
import { ChildphotoComponent } from './childphoto/childphoto.component';
import { ChildupdateComponent } from './childupdate/childupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    MyhomeworkComponent,
    Myang2Component,
    NeedStrongDirective,
    Myang3Component,
    Myc29Component,
    Myhomework29Component,
    MypipeComponent,
    SexPipe,
    ZzmmPipe,
    ParentComponent,
    ChildblogComponent,
    ChildphotoComponent,
    ChildupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
