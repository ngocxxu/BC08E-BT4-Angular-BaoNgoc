import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-header',
  template: `<div class="bt-header">
    
  </div>`,
  styles:[`
    .bt-header{
      background-color: red;
      height: 200px;
    }
  `]
})

export class BTHeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}