import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ProductCart } from 'src/app/types/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 cartItems : ProductCart[] = [];
 cartItemValues : number = 0;
  constructor(
    private lsService : LocalStorageService
  ) { }

  ngOnInit(): void {
    this.onSetCartItems();
    //cần 1 cách thức  nào đó có thể lắng nghe việc thay đổi giá trị của ls
    //hoặc cho biết khi nào có thể lấy dữ liệu mới
    this.lsService.watchService().subscribe(data => {
      //khi serviceSubject.next('') thì subscribe sẽ được gọi
      this.onSetCartItems();
    })
  }
  onSetCartItems () {
    this.cartItems = this.lsService.getItem();

    this.cartItemValues = 0;
    this.cartItems.forEach(item => {
      this.cartItemValues += item.value;
    })
  }

}
