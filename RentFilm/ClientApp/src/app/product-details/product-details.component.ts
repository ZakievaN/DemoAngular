import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IService } from '../iservice';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css'],
    providers: [IService]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
      private route: ActivatedRoute,
      private cartService: CartService,
      private service : IService
  ) {}

  addToCart(product) {
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
        this.product = this.service.products[+params.get('productId')];
    });
  }
}
