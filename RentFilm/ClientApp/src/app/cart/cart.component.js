var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let CartComponent = class CartComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.totalPrice = 0;
        this.items = this.cartService.getItems();
        this.totalPrice = this.cartService.getTotalPrice();
    }
    onSubmit(customerData) {
        console.warn('Your order has been submitted', customerData);
        this.items = this.cartService.clearCart();
        this.totalPrice = this.cartService.getTotalPrice();
    }
    ngOnInit() { }
};
CartComponent = __decorate([
    Component({
        selector: 'app-cart',
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.css'],
    })
], CartComponent);
export { CartComponent };
//# sourceMappingURL=cart.component.js.map