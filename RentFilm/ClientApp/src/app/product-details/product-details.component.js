var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { DataService } from '../data.service';
let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(route, cartService, dataService) {
        this.route = route;
        this.cartService = cartService;
        this.dataService = dataService;
    }
    addToCart(product) {
        this.cartService.addToCart(product);
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            var id = parseInt(params.get('id'), 10);
            window.alert(id);
            this.dataService.getProduct(id).subscribe((data) => this.product = data);
            ;
        });
    }
};
ProductDetailsComponent = __decorate([
    Component({
        selector: 'app-product-details',
        templateUrl: './product-details.component.html',
        styleUrls: ['./product-details.component.css'],
        providers: [DataService]
    })
], ProductDetailsComponent);
export { ProductDetailsComponent };
//# sourceMappingURL=product-details.component.js.map