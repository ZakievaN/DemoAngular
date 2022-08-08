import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
    selector: 'app-product-list-base',
    templateUrl: './product-list-base.component.html',
    styleUrls: ['./product-list-base.component.css'],
    providers: [DataService]
})
export class ProductListBaseComponent {
    products: Product[];

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts() {
        this.dataService.getProducts()
            .subscribe((data: Product[]) => this.products = data);
    }
   
}
