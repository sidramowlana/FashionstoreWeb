import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/Orders.Service';

@Component({
  selector: 'app-customers-completed-order-item-list',
  templateUrl: './customers-completed-order-item-list.component.html',
  styleUrls: ['./customers-completed-order-item-list.component.css']
})
export class CustomersCompletedOrderItemListComponent implements OnInit {
  completedOrdersList;
  count;
  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
    this.ordersService.onGetAllUserOrdersByStatus("Completed").subscribe(data=>{
      this.completedOrdersList = data;
      this.count=this.completedOrdersList.length;    })
  }

}
