import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/Orders.Service';

@Component({
  selector: 'app-customers-pending-order-item-list',
  templateUrl: './customers-pending-order-item-list.component.html',
  styleUrls: ['./customers-pending-order-item-list.component.css']
})
export class CustomersPendingOrderItemListComponent implements OnInit {
  pendingOrdersList
  count;
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.ordersService.onGetAllUserOrdersByStatus("Pending").subscribe(data => {
      this.pendingOrdersList = data;
      this.count = this.pendingOrdersList.length;
    });
    this.ordersService.updatePendingOrderList.subscribe(() => {
      this.ordersService.onGetAllUserOrdersByStatus("Pending").subscribe(data => {
        this.pendingOrdersList = data;
        this.count = this.pendingOrdersList.length;
      });
    });
  }
}
