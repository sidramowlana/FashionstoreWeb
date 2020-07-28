import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/Orders.Service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cart-orders-selected-view',
  templateUrl: './cart-orders-selected-view.component.html',
  styleUrls: ['./cart-orders-selected-view.component.css']
})
export class CartOrdersSelectedViewComponent implements OnInit {

  constructor(private ordersService: OrdersService, private activatedRoute: ActivatedRoute) { }

  id;
  date;
  username;
  email
  phone;
  total;
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log("this is id: " + this.id);
        this.ordersService.onGetAOrderById(this.id).subscribe(data => {
          console.log(data);
          this.id = data.ordersId;
          this.date = data.date
          this.username = data.user.usernam;
          this.email = data.user.email;
          this.phone = data.user.phone;
          this.total = data.total;
        });
      }
    );
  }
}

