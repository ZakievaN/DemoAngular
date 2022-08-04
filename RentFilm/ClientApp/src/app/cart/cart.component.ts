import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items;

  constructor(
    private cartService: CartService,
  ) {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
      this.items = this.cartService.clearCart();
  }

  ngOnInit() {}
}
