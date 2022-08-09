import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/product';
import { ProductListBaseComponent } from '../product-list-base/product-list-base.component';

@Component({
    selector: 'app-product-list-admin',
    templateUrl: './product-list-admin.component.html',
    styleUrls: ['./product-list-admin.component.css'],
    providers: [DataService]
})

export class ProductListAdminComponent extends ProductListBaseComponent {

    product: Product = new Product();   // изменяемый товар              // массив товаров
    tableMode: boolean = true;          // табличный режим

    constructor(public dataService: DataService) {
        super(dataService);
    }

    // сохранение данных
    save() {
        if (this.product.id == null) {
            this.dataService.createProduct(this.product)
                .subscribe((data: Product) => this.products.push(data));
        } else {
            this.dataService.updateProduct(this.product)
                .subscribe(data => this.loadProducts());
        }
        this.cancel();
    }

    editProduct(p: Product) {
        this.product = p;
    }

    cancel() {
        this.product = new Product();
        this.tableMode = true;
    }

    delete(p: Product) {
        this.dataService.deleteProduct(p.id)
            .subscribe(data => this.loadProducts());
    }

    add() {
        this.cancel();
        this.tableMode = false;
    }
}