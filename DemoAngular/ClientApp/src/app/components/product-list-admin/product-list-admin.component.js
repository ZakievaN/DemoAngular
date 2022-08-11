var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/product';
import { ProductListBaseComponent } from '../product-list-base/product-list-base.component';
let ProductListAdminComponent = class ProductListAdminComponent extends ProductListBaseComponent {
    constructor(dataService, cartService) {
        super(dataService);
        this.dataService = dataService;
        this.cartService = cartService;
        this.product = new Product(); // изменяемый товар              // массив товаров
        this.tableMode = true; // табличный режим
    }
    addToCart(product) {
        this.cartService.addToCart(product);
    }
    save() {
        if (this.product.id == null) {
            this.dataService.createProduct(this.product)
                .subscribe((data) => this.products.push(data));
        }
        else {
            this.dataService.updateProduct(this.product)
                .subscribe(data => this.loadProducts());
        }
        this.cancel();
    }
    editProduct(p) {
        this.product = p;
    }
    cancel() {
        this.product = new Product();
        this.tableMode = true;
    }
    delete(p) {
        this.dataService.deleteProduct(p.id)
            .subscribe(data => this.loadProducts());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
};
ProductListAdminComponent = __decorate([
    Component({
        selector: 'app-product-list-admin',
        templateUrl: './product-list-admin.component.html',
        styleUrls: ['./product-list-admin.component.css'],
        providers: [DataService]
    })
], ProductListAdminComponent);
export { ProductListAdminComponent };
//# sourceMappingURL=product-list-admin.component.js.map