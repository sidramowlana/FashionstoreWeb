import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/Orders.Service';
import { ActivatedRoute, Params } from '@angular/router';
import { CartOrders } from 'src/app/models/CartOrders.model';

@Component({
  selector: 'app-cart-orders-list',
  templateUrl: './cart-orders-list.component.html',
  styleUrls: ['./cart-orders-list.component.css']
})
export class CartOrdersListComponent implements OnInit {
  cartOrdersList; id;

  constructor(private ordersService: OrdersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log("this is id: " + this.id);
        this.ordersService.onGetAllCartByOrderId(this.id).subscribe((data:CartOrders[]) => {
          this.cartOrdersList = data;
          console.log(this.cartOrdersList)
        });
      }
    );
  }
}

