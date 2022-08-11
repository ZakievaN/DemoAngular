import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { DataService } from '../../services/data.service';
import { ProductListBaseComponent } from '../../components/product-list-base/product-list-base.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [DataService]
})
export class ProductListComponent extends ProductListBaseComponent {
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