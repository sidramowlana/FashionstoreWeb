import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/Cart.service';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {
  cartList;
  count;
  total;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.onGetAllCartItemByUserIdService().subscribe(data => {
      this.cartList = data;
      this.count = this.cartList.length;
      console.log("this is my cart total: " + this.onCalculateTotal());
      this.total = this.onCalculateTotal()
      console.log(this.cartList);
    });
    this.cartService.cartListUpdate.subscribe(updatedData => {
      this.cartList = updatedData;
      this.count = this.cartList.length;
      this.total = this.onCalculateTotal()
    });
  }

  onCalculateTotal() {
    let total = 0;
    for (let cart of this.cartList) {
      total += cart.total;
    }
    return total


  }

}
