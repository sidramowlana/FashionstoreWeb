import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { worker } from 'cluster';
import { CartService } from 'src/app/services/Cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartElement;
  @Input() index;
  @ViewChild('qty') qty: HTMLInputElement;
  // @ViewChild('selectedSize') selectedSize: ElementRef;

  constructor(private cartService: CartService) { }
  ngOnInit() {
  }

  onSubmit(cartId) {
   let newQuantity = this.qty.value;
    this.cartService.onUpdateCartItem(cartId,Number(newQuantity)).subscribe(()=>
    {
      console.log("updating")
      this.cartService.cartLisAmounttUpdate.next();
    })
  }

  onRemoveCartProduct(cartId) {
    console.log(cartId);
    this.cartService.onDeleteCartIdService(cartId).subscribe(data => {
      console.log(data);
      this.cartService.onGetAllCartItemByUserIdService().subscribe(data => {
        this.cartService.cartListUpdate.next(data);
      });
    });
  }
}
