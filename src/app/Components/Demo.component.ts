//a-componein-inline
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo', //tên thẻ
  //template: nội dung thẻ
  template: ` 
  <div>
    Demo angular
  </div>
  ` 
})

export class DemoComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}