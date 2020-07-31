import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductInquiryService } from '../services/ProductInquiry.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product-inquiry',
  templateUrl: './add-product-inquiry.component.html',
  styleUrls: ['./add-product-inquiry.component.css']
})
export class AddProductInquiryComponent implements OnInit {
  inquiryForm:FormGroup
  constructor(private toastr: ToastrService,
    private activatedRoute:ActivatedRoute,private productInquiryService:ProductInquiryService,public datepipe: DatePipe) { }
  currentDate = new Date();
  currentDateFormatted;
  id;
  ngOnInit() {
    this.initForm();
    this.currentDateFormatted = this.datepipe.transform(this.currentDate, 'dd/MM/yyyy hh:mm')
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.id = +params['id'];  
      }
    )
  }

  initForm(){
    this.inquiryForm = new FormGroup({
      'question': new FormControl(null,Validators.required)
    });
  }
  onAddInquiry()
  {
    console.log(this.currentDateFormatted)
    this.productInquiryService.onAddProductInquiryByProductIdService(this.id,this.inquiryForm,this.currentDateFormatted).subscribe(data=>{
      console.log(data);
      this.inquiryForm.reset();
      this.toastr.success("We will reply to you soon","Your inquiry has been made successfully");

    },
    err=>{
      this.toastr.error("Couldn't submit","Please try again later");

    })

  }
}
