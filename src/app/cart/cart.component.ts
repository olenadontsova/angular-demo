import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBiulder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBiulder: FormBuilder
  ) {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submited', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
