import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-sider',
  template: `<div class="bt-sider"></div>`,
  styles:[`
  .bt-sider {
    background-color: yellow;
    height: 400px;
  }
  `]
})

export class BTSider implements OnInit {
  constructor() { }

  ngOnInit() { }
}