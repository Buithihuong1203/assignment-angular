import { Component, OnInit } from '@angular/core';
import { convertToParamMap } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ProductCart } from 'src/app/types/Product';

@Component({
  selector: 'app-cart-client',
  templateUrl: './cart-client.component.html',
  styleUrls: ['./cart-client.component.css']
})
export class CartClientComponent implements OnInit {
  products: ProductCart[] = []
  constructor(private lsService: LocalStorageService) { }

  ngOnInit(): void {
    this.onGetCart()

  }
  onGetCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    this.products = cart
  }




}
