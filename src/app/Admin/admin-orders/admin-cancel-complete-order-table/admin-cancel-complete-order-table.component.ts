import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/Orders.Service';

@Component({
  selector: 'app-admin-cancel-complete-order-table',
  templateUrl: './admin-cancel-complete-order-table.component.html',
  styleUrls: ['./admin-cancel-complete-order-table.component.css']
})
export class AdminCancelCompleteOrderTableComponent implements OnInit {

  cancelledOrderList;
  completedOrderList;
  bothList: any[];
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.ordersService.onGetAllPendingOrdersByStatus("Completed").subscribe(data => {
      this.completedOrderList = data;
      this.ordersService.onGetAllPendingOrdersByStatus("Cancelled").subscribe(data => {
        this.cancelledOrderList = data;
        this.bothList = [...this.completedOrderList,...this.cancelledOrderList]
        console.log(this.bothList);
      });
    });
    // this.ordersService.onGetAllPendingOrdersByStatus("Completed").subscribe(data=>
    //   {
    //     this.completedOrderList = data;
    //     console.log(data)
    //   });
    //   this.ordersService.onGetAllPendingOrdersByStatus("Cancelled").subscribe(data=>
    //     {
    //       this.cancelledOrderList = data;
    //     });
    //     this.bothList=[...this.completedOrderList]
    //     this.bothList=[...this.cancelledOrderList];
    // console.log(this.bothList)
  }

}
