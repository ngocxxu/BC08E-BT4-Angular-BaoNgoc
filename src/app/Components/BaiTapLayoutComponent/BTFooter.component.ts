import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-footer',
  template: `<div class="bt-footer">

  </div>`,
  styles:[`
  .bt-footer {
    background-color: blue;
    height: 200px;
  }
  `]
})

export class BTFooter implements OnInit {
  constructor() { }

  ngOnInit() { }
}