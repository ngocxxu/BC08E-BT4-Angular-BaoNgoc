import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-body',
  template: `<div class="bt-body"></div>`,
  styles: [
    `
      .bt-body {
        background-color: green;
        height: 400px;
      }
    `,
  ],
})
export class BTBody implements OnInit {
  constructor() {}

  ngOnInit() {}
}
