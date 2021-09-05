import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './BaiTapLayout.component';
import { BTBody } from './BTBody.component';
import { BTFooter } from './BTFooter.component';
import { BTHeaderComponent } from './BTHeader.component';
import { BTSider } from './BTSider.component';


@NgModule({
  imports: [CommonModule],
  exports: [BaiTapLayoutComponent], //kết quả cần xuất ra của module/component này để module khác import và có thể sử dụng, do bên app.component.html thì BaiTapLayoutComponent gói gọn các component còn lại, nên ta export chỉ mình nó
  declarations: [BaiTapLayoutComponent,BTHeaderComponent, BTSider,BTBody,BTFooter],
})
export class BaiTapLayoutModule { }
