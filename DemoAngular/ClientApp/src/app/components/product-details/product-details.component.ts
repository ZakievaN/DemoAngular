import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/product';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css'],
    providers: [DataService]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
      private route: ActivatedRoute,
      private cartService: CartService,
      public dataService: DataService
  ) {}

  addToCart(product) {
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
        
        var id: number = parseInt(params.get('id')!, 10);
        this.dataService.getProduct(id).subscribe((data: Product) => this.product = data);
       
    });
  }
}
