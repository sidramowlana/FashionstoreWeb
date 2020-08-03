import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/Orders.Service';
import { Orders } from 'src/app/models/Orders.model';
import { CartOrders } from 'src/app/models/CartOrders.model';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


@Component({
  selector: 'app-customer-orders-detail-item',
  templateUrl: './customer-orders-detail-item.component.html',
  styleUrls: ['./customer-orders-detail-item.component.css']
})
export class CustomerOrdersDetailItemComponent implements OnInit {

  constructor(private router: Router, private location: Location, private activatedRoute: ActivatedRoute, private ordersService: OrdersService, private toastr: ToastrService) { }
  id;
  date;
  total;
  address;
  postalCode;
  city;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log("look: " + this.id);
      this.ordersService.onGetAOrderById(this.id).subscribe(data => {
        console.log(data);
        this.id = data.ordersId;
        this.date = data.date
        this.address = data.address;
        this.postalCode = data.postalCode;
        this.city = data.city;
        this.total = data.total;
      });
    });
  }
  
  isPendidngAdvancedRoute(): boolean {
    return this.location.path().indexOf('/pending') > -1;
  }
  isCompleteAdvancedRoute(): boolean {
    return this.location.path().indexOf('/completed') > -1;
  }
  isCancelledAdvancedRoute(): boolean {
    return this.location.path().indexOf('/cancelled') > -1;
  }
  onOrdersStateChange() {
    if (this.isPendidngAdvancedRoute()) {
      this.onCancelOrder();

    } else if (this.isCancelledAdvancedRoute()) {
      this.onReOrder();
    }
  }

  onReOrder() {
    this.ordersService.onUpdateOrderStatusByOrderId("Pending", this.id).subscribe(data => {
      console.log(data);
      this.toastr.success("Your order has been re-ordered as pending")
      this.router.navigate(['pending']);
    },
      err => {
        this.toastr.error("System couldnt perform the cancelling of the order")
      });
  }

  onCancelOrder() {
    this.ordersService.onUpdateOrderStatusByOrderId("Cancelled", this.id).subscribe(data => {
      console.log(data);
      this.toastr.success("Your order has been cancelled")
      this.router.navigate(['cancelled']);
    },
      err => {
        this.toastr.error("System couldnt perform the cancelling of the order")
      });
  }  
}
