import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RateReviewServie } from '../services/RateReview.service';

@Component({
  selector: 'app-rate-review-form',
  templateUrl: './rate-review-form.component.html',
  styleUrls: ['./rate-review-form.component.css']
})
export class RateReviewFormComponent implements OnInit {
@Input() index;
  rateReviewForm:FormGroup;
  constructor(private toastr:ToastrService,private rateReviewService:RateReviewServie) { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
      this.rateReviewForm = new FormGroup({
        'rate': new FormControl(null, Validators.required),
        'feedback': new FormControl(null, Validators.required)
      });
  }
  onSubitRate()
  {
    console.log(this.index)
    console.log(this.rateReviewForm)
    this.rateReviewService.onAddRateReview(this.index,this.rateReviewForm).subscribe(data=>
      {
        this.toastr.success(data.message);
        this.rateReviewForm.reset();
      },err=>
      {
        this.toastr.error(err.error.message);
      })
  }
}
