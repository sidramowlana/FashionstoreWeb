import { Component, OnInit } from '@angular/core';
import { RateReviewServie } from 'src/app/services/RateReview.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TrustedStyleString } from '@angular/core/src/sanitization/bypass';
import { ProductService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-rate-list',
  templateUrl: './rate-list.component.html',
  styleUrls: ['./rate-list.component.css']
})
export class RateListComponent implements OnInit {
rateReviewList;
average;
id;
count;
scaledImage:String;
  constructor(private rateReviewService:RateReviewServie,private productService:ProductService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log(this.id)
        this.productService.onGetProductByProductIdService(this.id).subscribe(data=>
          {
            this.scaledImage= data.scaledImage;
          })
        this.rateReviewService.onGetRateReviewByProductId(this.id).subscribe(data => {
          this.rateReviewList = data;
          
          this.count = this.rateReviewList.length;
          console.log(this.rateReviewList)
          this.average = this.rateReviewService.onCalculateAverage(this.rateReviewList);
        });
      }
    );
  
  }

  onViewDetails(index){
    this.router.navigate(['home/products/details/'+index]);
  }

}
