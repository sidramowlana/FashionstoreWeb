import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/Cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartService.onGetAllCartItemByUserIdService().subscribe(data => {
      this.cartService.cartListCountChange.next();
    });
  }

}
