import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from '../services/tokenStorage.service';
import { UserService } from '../services/User.service';
import { DatePipe } from '@angular/common';
import { OrdersService } from '../services/Orders.Service';
import { CartService } from '../services/Cart.service';
import { CartOrders } from '../models/CartOrders.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  paymentForm: FormGroup;
  user;
  username;
  phone;
  currentDate = new Date();
  currentDateFormatted;

  constructor(private userService: UserService, private datepipe: DatePipe,private toastr:ToastrService,
    private ordersService: OrdersService, private cartService: CartService) { }

  ngOnInit() {
    this.initForm(this.username, this.phone);
    this.currentDateFormatted = this.datepipe.transform(this.currentDate, 'dd/MM/yyyy hh:mm')
    this.userService.onGetAUserService().subscribe(data => {
      this.username = data.username;
      this.phone = data.phone;
      this.initForm(this.username, this.phone);
    });
  }

  initForm(username, phone) {
    this.paymentForm = new FormGroup({
      'username': new FormControl(username, Validators.required),
      'phone': new FormControl(phone, Validators.required),
      'city': new FormControl(null, Validators.required),
      'postalCode': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
    });
  }
  cartList;
  savedOrder;
  cartOrders:CartOrders;
  onPayment() {
    console.log(this.paymentForm)
    this.ordersService.onAddOrdersService(this.paymentForm, this.currentDateFormatted, "Pending").subscribe(data => {
      console.log(data);
      this.savedOrder = data;
      this.cartService.onGetAllCartItemByUserIdService().subscribe(cartListdata => {
        this.cartList = cartListdata;
        for(let cart of this.cartList){
          console.log(cart)
          this.cartOrders = new CartOrders(this.savedOrder,cart);
          console.log(this.cartOrders);
          this.ordersService.onAddCartOrdersService(this.cartOrders).subscribe(data=>{
            console.log(data);
            this.toastr.success(data.message);
            // route the user to the orders page.
          },err=>
          {
            this.toastr.error("Please try again later", "System failed to make your payments");
          });
        }
      })
    });
  }
}
