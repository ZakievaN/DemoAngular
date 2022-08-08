import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';
import { Product } from '../product';
import { ProductListBaseComponent } from '../product-list-base/product-list-base.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [DataService]
})
export class ProductListComponent extends ProductListBaseComponent {
    products: Product[]; 

    constructor(
        private cartService: CartService,
        public dataService: DataService
    ) {
        super(dataService);
    }

    addToCart(product) {
        this.cartService.addToCart(product);
    }
}