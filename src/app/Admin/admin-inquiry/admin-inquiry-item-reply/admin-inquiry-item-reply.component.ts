import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductInquiryService } from 'src/app/services/productInquiry.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-inquiry-item-reply',
  templateUrl: './admin-inquiry-item-reply.component.html',
  styleUrls: ['./admin-inquiry-item-reply.component.css']
})
export class AdminInquiryItemReplyComponent implements OnInit {

  inquiryReplyForm: FormGroup;
  id;
  imageUrl;
  productName;
  date;
  username;
  email;
  phone;
  question;
  isReply: boolean = false;
  message:String;
  constructor(private activatedRoute: ActivatedRoute,
    private producInquiryService: ProductInquiryService,
    private router: Router,) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log("this is id: " + this.id);
        this.producInquiryService.onGetInquiryByIdService(this.id).subscribe(data => {
          console.log(data);
          this.imageUrl = data.product.scaledImage;
          this.productName = data.product.productName;
          this.date = data.date;
          this.username = data.user.username;
          this.email = data.user.email;
          this.phone = data.user.phone;
          this.question = data.user.question;
        });
      }

    );
    console.log(this.isReply);

    this.initForm();
  }
  onReply() {
    this.isReply = true;    
  }
  onCancel()
  {
    this.isReply=false;
  }
  initForm() {
    this.inquiryReplyForm = new FormGroup({
      'answers': new FormControl(null, Validators.required)
    })
  }

  onSubmitReply(){
    this.producInquiryService.onAddAnswerByProductInquiryIdService(this.id,this.inquiryReplyForm).subscribe(data=>
      {
        this.message = data.message;
      });
  }
}
