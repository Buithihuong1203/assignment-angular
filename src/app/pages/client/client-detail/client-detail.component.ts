import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/types/Product';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  product: Product;
  cartItemValue : number = 1;


  constructor(private productService : ProductService,
    private activateRoute: ActivatedRoute,
    private lsService : LocalStorageService,
    public toastr : ToastrService
    ) {
    this.product = {
      _id: '',
      name: '',
      status: 0,
      price:0,
      sale_price:0,
      description:'',
      img_url:'',
      //category_id:''

    }
   }

  ngOnInit(): void {
    const idFromUrl = this.activateRoute.snapshot.params['id'];

    this.productService.getProduct(idFromUrl).subscribe(data => {
      this.product = data;
      console.log(data);
    })
  }
  onInputValueChange(event: any) {
    this.cartItemValue = event.target.value;
  }
  onAddToCart(){
    const addItem = {
      _id: this.product._id,
      name: this.product.name,
      status: this.product.status,
      price: this.product.price,
      sale_price: this.product.sale_price,
      description: this.product.description,
      img_url : this.product.img_url,
      //category_id: this.product.category_id,
      value: +this.cartItemValue,
    };
    this.toastr.success('Thêm sản phẩm vào giỏ hàng thành công')
    this.lsService.setItem(addItem);
    this.cartItemValue = 1;
  }
}
