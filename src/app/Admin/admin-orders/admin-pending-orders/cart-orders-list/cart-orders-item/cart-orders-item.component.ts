import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrdersService } from 'src/app/services/Orders.Service';

@Component({
  selector: 'app-cart-orders-item',
  templateUrl: './cart-orders-item.component.html',
  styleUrls: ['./cart-orders-item.component.css']
})
export class CartOrdersItemComponent implements OnInit {

  @Input() cartOrderElement;
  @Input() index;
  constructor(private activatedRoute:ActivatedRoute,private ordersService:OrdersService) { }

  ngOnInit() {
  }

}
