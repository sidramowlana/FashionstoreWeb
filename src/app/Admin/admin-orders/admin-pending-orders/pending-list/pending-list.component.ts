import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/Orders.model';
import { OrdersService } from 'src/app/services/Orders.Service';

@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.css']
})
export class PendingListComponent implements OnInit {

  pendingOrdersList;
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.ordersService.onGetAllPendingOrdersByStatus("Cancelled").subscribe(data => {
      this.pendingOrdersList = data;
    });
  }

}
