var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { DataService } from '../data.service';
let ProductListBaseComponent = class ProductListBaseComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.loadProducts();
    }
    loadProducts() {
        this.dataService.getProducts()
            .subscribe((data) => this.products = data);
    }
};
ProductListBaseComponent = __decorate([
    Component({
        selector: 'app-product-list-base',
        templateUrl: './product-list-base.component.html',
        styleUrls: ['./product-list-base.component.css'],
        providers: [DataService]
    })
], ProductListBaseComponent);
export { ProductListBaseComponent };
//# sourceMappingURL=product-list-base.component.js.map