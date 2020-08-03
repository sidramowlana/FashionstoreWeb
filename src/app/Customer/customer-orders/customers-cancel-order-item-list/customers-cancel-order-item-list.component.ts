import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/Orders.Service';

@Component({
  selector: 'app-customers-cancel-order-item-list',
  templateUrl: './customers-cancel-order-item-list.component.html',
  styleUrls: ['./customers-cancel-order-item-list.component.css']
})
export class CustomersCancelOrderItemListComponent implements OnInit {
 cancelledOrdersList;
 count;
  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
    this.ordersService.onGetAllUserOrdersByStatus("Cancelled").subscribe(data=>{
      this.cancelledOrdersList = data;
      this.count= this.cancelledOrdersList.length;
    });
  }

}
