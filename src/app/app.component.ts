import { Component, OnInit } from '@angular/core';
import { OrdersService } from './services/Orders.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fashionStoreWeb';
  cartOrdersList;
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    // this.ordersService.onGetAllCartOrdersByUserId().subscribe(data => {
    //   this.cartOrdersList = data;
    //   console.log(this.cartOrdersList)
    //   for (let cartOrder of this.cartOrdersList) {
    //     if (cartOrder.orders.status === "Pending") {
    //       setTimeout(() => {
    //         // cartOrder.orders.status = "Completed"
    //         console.log(cartOrder.cardOrderId);
    //         this.ordersService.onUpdateOrderStatusByOrderId("Completed", cartOrder.orders.ordersId).subscribe(data => {
    //           console.log(data)
    //           this.ordersService.updatePendingOrderList.next(data);
    //           console.log("after timeout")

    //         });
    //       }, 120000);
    //     }
    //   }
    // });
  }
}