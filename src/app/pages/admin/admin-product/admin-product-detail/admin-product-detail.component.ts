import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
product : Product;
  constructor(private productService : ProductService,
    private activateRoute : ActivatedRoute
    ) {
    this.product = {
      _id: '',
      name: '',
      status: 0,
      price:0,
      sale_price:0,
      description:'',
      img_url:'',

    }
   }

  ngOnInit(): void {
    const idFormUrl = this.activateRoute.snapshot.params['id'];
    this.productService.getProduct(idFormUrl).subscribe(data => {
      this.product = data;
    })
  }

}
