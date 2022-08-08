import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IService } from './iservice';

@Injectable({
  providedIn: 'root',
})
export class CartService extends IService {
    products;

    constructor(private http: HttpClient) {
        super();
    }

    addToCart(product) {
        this.products.push(product);
    }

    getItems() {
        return this.products;
    }

    getTotalPrice() {
        var sum: number = 50;
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
}
