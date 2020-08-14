import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from '../services/tokenStorage.service';
import { UserService } from '../services/User.service';
import { DatePipe } from '@angular/common';
import { OrdersService } from '../services/Orders.Service';
import { CartService } from '../services/Cart.service';
import { CartOrders } from '../models/CartOrders.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  @Input() total;
  paymentForm: FormGroup;
  user;
  username;
  phone;
  currentDate = new Date();
  currentDateFormatted;

  cartList;
  savedOrder;
  cartOrders: CartOrders;

  constructor(private userService: UserService, private datepipe: DatePipe, private toastr: ToastrService,
    private ordersService: OrdersService, private router: Router, private cartService: CartService) { }

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
  onPayment() {
    this.ordersService.onAddOrdersService(this.paymentForm, this.currentDateFormatted, "Pending",this.total).subscribe(data => {
      this.savedOrder = data;
      this.cartService.onGetAllCartItemByUserIdService().subscribe(cartListdata => {
        this.cartList = cartListdata;
        for (let cart of this.cartList) {
          this.cartOrders = new CartOrders(this.savedOrder, cart);
          this.ordersService.onAddCartOrdersService(this.cartOrders).subscribe(data => {
            this.cartService.onGetAllCartItemByUserIdService().subscribe(data => {
              this.cartService.cartListCountChange.next();
            });
            this.toastr.success(data.message);
            this.router.navigate(['pending']);
          }, err => {
            this.toastr.error("Please try again later", "System failed to make your payments");
          });
        }
      })
    });
  }
}
