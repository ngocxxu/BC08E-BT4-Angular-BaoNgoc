import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  template: `<div class="container">
    <h1>Data binding</h1>
    <h4>Oneway binding</h4>
    <p>
      1. Interpolation (Binding dữ lịu từ model -> view thông qua thuộc tính với
      dấu ngoặc nhọn)
    </p>
    <!-- cách binding TS lên giao diện -->
    <p>TIêu đề: {{ title }}</p>
    <input value="{{ title }}" />
    <hr />
    <p>
      2. Property Binding (Binding dựa trên thuộc tính của thẻ thông qua [] =>
      thường dùng cho thẻ input)
    </p>
    <div [innerHTML]="title"></div>
    <input [value]="title" />
    <hr />
    <p>
      3. Event Binding (Thay đổi dữ liệu trên giao diện thông qua xử lý thao tác
      từ ng dùng)
    </p>
    <div class="form-group">
      <p>TIêu đề</p>
      <input class="form control" #tagInput />Template variables
      <br />
      <button class="btn btn-success" (click)="changeTitle(tagInput.value)">
        Change Title
      </button>
    </div>
    <h3>Two binding (binding dữ liệu 2 chiều tự động)</h3>
    <input class='form-control' [(ngModel)] = "title" />

    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- thuộc tính ngFor dung để lặp -->
        <tr *ngFor='let product of arrProduct'>
          <td>{{product.id}}</td>
          <td>{{product.name}}</td>
          <td>
            <img [src] = 'product.img' width='50' height='50' alt='...'>
          </td>
          <td>{{product.price}}</td>
          <td>
            <input class='form-control' [(ngModel)]="product.quantity">
          </td>
          <td>{{product.price*product.quantity}}</td>
        </tr>
      </tbody>
    </table>
  </div>`,
})

//đây là phần model
export class DataBindingComponent implements OnInit {
  //dữ liệu mún hiển thị trên giao diện thì nó phải là thuộc tính của component, #: là biến giao diện, đại diện cho thẻ, chứ ko phải id
  title: string = 'abc';
  arrProduct: Product[] = [
    {
      id: '1',
      name: 'ihoneX',
      price: 1000,
      img: 'https://picsum.photos/id/1/200/200',
      quantity: 15,
    },
    {
      id: '2',
      name: 'ihoneX',
      price: 2000,
      img: 'https://picsum.photos/id/2/200/200',
      quantity: 10,
    },
    {
      id: '3',
      name: 'ihoneX',
      price: 3000,
      img: 'https://picsum.photos/id/3/200/200',
      quantity: 20,
    },
  ];

  constructor() {}
  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
  ngOnInit() {}
}
interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  quantity: number;
}
