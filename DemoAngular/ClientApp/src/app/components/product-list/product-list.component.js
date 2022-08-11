var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ProductListBaseComponent } from '../../components/product-list-base/product-list-base.component';
let ProductListComponent = class ProductListComponent extends ProductListBaseComponent {
    constructor(cartService, dataService) {
        super(dataService);
        this.cartService = cartService;
        this.dataService = dataService;
    }
    addToCart(product) {
        this.cartService.addToCart(product);
    }
};
ProductListComponent = __decorate([
    Component({
        selector: 'app-product-list',
        templateUrl: './product-list.component.html',
        styleUrls: ['./product-list.component.css'],
        providers: [DataService]
    })
], ProductListComponent);
export { ProductListComponent };
//# sourceMappingURL=product-list.component.js.map