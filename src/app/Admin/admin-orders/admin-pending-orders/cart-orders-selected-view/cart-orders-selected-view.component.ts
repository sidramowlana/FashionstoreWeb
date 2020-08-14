import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/Orders.Service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-orders-selected-view',
  templateUrl: './cart-orders-selected-view.component.html',
  styleUrls: ['./cart-orders-selected-view.component.css']
})
export class CartOrdersSelectedViewComponent implements OnInit {

  constructor(private ordersService: OrdersService,private toastr:ToastrService, private activatedRoute: ActivatedRoute,private router:Router) { }

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
        this.ordersService.onGetAOrderById(this.id).subscribe(data => {
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
  onCancelPending() {
    this.ordersService.onUpdateOrderStatusByOrderId("Cancelled", this.id).subscribe(data => {
      this.toastr.success("Succesfully Cancelled")
      this.router.navigate(['orders/cancel-complete']);
    },
    err=>
    {
      this.toastr.error("System couldnt perform the cancelling of the order");
    });

  }

  onCompletePending()
  {
    this.ordersService.onUpdateOrderStatusByOrderId("Completed", this.id).subscribe(data => {
      this.toastr.success("Successfully completed")
      this.router.navigate(['orders/cancel-complete']);
    },
    err=>
    {
      this.toastr.error("System couldnt perform the complete of the order");
    });
  }

}

