import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from '../services/tokenStorage.service';
import { UserService } from '../services/User.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  paymentForm:FormGroup;
  user;
  username;
  phone;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.initForm(this.username,this.phone);

    this.userService.onGetAUserService().subscribe(data=>{
      this.username = data.username;
      this.phone=data.phone;
            
      this.initForm(this.username,this.phone);

    });

  }

  initForm(username,phone){
    this.paymentForm = new FormGroup({
      'username':new FormControl(username,Validators.required),
      'phone':new FormControl(phone,Validators.required),
      'city':new FormControl(null,Validators.required),
      'postalCode':new FormControl(null,Validators.required),
      'address':new FormControl(null,Validators.required),
    });
  }
}
