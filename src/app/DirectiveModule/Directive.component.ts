import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  template: `<div class="container">
    <h3>Structural (directive angular cung cấp)</h3>
    <h2>*ngIf</h2>
    <nav class="nav bg-dark text-white">
      <a
        *ngIf="!isLogin; else tempLogin"
        class="nav-link active text-white"
        href="#"
        (click)="login()"
        >Login</a
      >
    </nav>

    <!-- <ng-container [ngTemplateOutlet]="tempLogin"></ng-container> -->

    <ng-template #tempLogin>
      <a *ngIf="isLogin" class="nav-link active text-white" href="#"
        >Hello {{ userName }}</a
      >
    </ng-template>
    <hr />
    <div class="form-group">
      <p>Nhập số</p>
      <input class="form-control" [(ngModel)]="number" />
    </div>
    <div class="alert alert-success">
      <p *ngIf="number % 2 == 0">số chắn</p>
      <p *ngIf="number % 2 !== 0">số lẻ</p>
    </div>
    <h3>*ngSwitchCase</h3>
    <select [(ngModel)]="color">
      <option value="red">Red</option>
      <option value="green">green</option>
      <option value="blue">blue</option>
      <option value="yellow">yellow</option>
    </select>
    <div [ngSwitch]="color">
      <p style="color: red;" *ngSwitchCase="'red'">Red</p>
      <p style="color: green;" *ngSwitchCase="'green'">green</p>
      <p style="color: blue;" *ngSwitchCase="'blue'">blue</p>
      <p style="color: yellow;" *ngSwitchCase="'yellow'">yellow</p>
    </div>
    <hr />
    <h3>*ngFor</h3>
    <div class="row">
      <div class="col-4" *ngFor="let user of arrUser ; let index = index">
        <div class="card">
          <img [src]='user.avatar' alt='...'>
          <div class="card-body">
            <p>ID: {{index + 1}}</p>
            <p>userName: {{user.userName}}</p>
            <p>Password: {{user.password}}</p>
            <p>Email: {{user.email}}</p>
          </div>
        </div>
      </div>
    </div>

  </div>`,
})
export class DirectiveComponent implements OnInit {
  arrUser: User[] = [
    { userName: 'bono', password: '123456', email: 'bono@gmail.com',avatar: 'https://i.pravatar.cc?u=bono'},
    { userName: 'bin', password: '789456', email: 'bin@gmail.com',avatar: 'https://i.pravatar.cc?u=bin' },
    { userName: 'yay', password: '321654', email: 'yay@gmail.com',avatar: 'https://i.pravatar.cc?u=yay' },
  ];
  color: string = 'red';
  number: number = 5;
  userName: string = 'bono';
  isLogin: boolean = false;

  login() {
    this.isLogin = true;
  }

  constructor() {}

  ngOnInit() {}
}

interface User {
  userName: string;
  password: string;
  email: string;
  avatar: string;
}
