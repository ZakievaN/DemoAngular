import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
    products: Product[]; 

    constructor(
        private cartService: CartService,
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.loadProducts();    // загрузка данных при старте компонента  
    }

    // получаем данные через сервис
    loadProducts() {
        this.dataService.getProducts()
            .subscribe((data: Product[]) => this.products = data);
    }

    addToCart(product) {
        this.cartService.addToCart(product);
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
