var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IService } from './iservice';
let CartService = class CartService extends IService {
    constructor(http) {
        super();
        this.http = http;
    }
    addToCart(product) {
        this.products.push(product);
    }
    getItems() {
        return this.products;
    }
    getTotalPrice() {
        var sum = 50;
        this.products.forEach(function (value) {
            sum = sum + value.price;
        });
        return sum;
    }
    clearCart() {
        this.products = [];
        return this.products;
    }
    getShippingPrices() {
        return this.http.get('/assets/shipping.json');
    }
};
CartService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartService);
export { CartService };
//# sourceMappingURL=cart.service.js.map