import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    items;
    totalPrice: number = 0;
    checkoutForm;
    
    constructor(
    private cartService: CartService,
    ) {
        this.items = this.cartService.getItems();
        this.totalPrice = this.cartService.getTotalPrice();
    }

    onSubmit() {        
        this.items = this.cartService.clearCart();
        this.totalPrice = this.cartService.getTotalPrice();
        window.alert('Your order has been submitted');
    }

    ngOnInit() {}
}
