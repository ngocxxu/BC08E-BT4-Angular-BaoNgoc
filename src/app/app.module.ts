import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './Components/BaiTapLayoutComponent/BaiTapLayout.module';
import { DemoComponent } from './Components/Demo.component';
import { DataBindingModule } from './DataBindingModule/DataBinding.module';
import {FormsModule} from '@angular/forms'
import { DirectiveModule } from './DirectiveModule/Directive.module';

@NgModule({
  declarations: [
    AppComponent,DemoComponent, //nơi chứa component, mỗi compo sinh ra phải có module chứa nó
  ],
  imports: [
    BrowserModule,BaiTapLayoutModule,DataBindingModule,DirectiveModule //nơi import các module khác của ứng dụng
  ],
  providers: [], //nơi khai báo các service
  bootstrap: [AppComponent] //nơi khai báo các component <app-root></app-root> dc chạy trên file index
})
export class AppModule { }
