import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-layout', //tên thẻ component
  template: ` <div>
    <app-bt-header></app-bt-header>
    <div class="row">
      <div class="col-8">
        <app-bt-body></app-bt-body>
      </div>
      <div class="col-4">
        <app-bt-sider></app-bt-sider>
      </div>
    </div>
    <app-bt-footer></app-bt-footer>
  </div>`,
})
export class BaiTapLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
