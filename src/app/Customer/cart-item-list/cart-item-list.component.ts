import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/Cart.service';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {
cartList;
  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartService.onGetAllCartItemByUserIdService().subscribe(data=>
      {
        this.cartList = data;
        console.log(data);
      })
  }

}
