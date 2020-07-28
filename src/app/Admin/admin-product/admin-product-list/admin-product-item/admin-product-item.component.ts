import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RateReviewServie } from 'src/app/services/RateReview.service';
import { ProductService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-admin-product-item',
  templateUrl: './admin-product-item.component.html',
  styleUrls: ['./admin-product-item.component.css']
})
export class AdminProductItemComponent implements OnInit {

  @Input() adminProductElement: Product;
  @Input() index: number;
  @Input() rateValue: number;
  totalRate;
  average;
  rateReviewList;
  productList;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductService, private rateReviewService: RateReviewServie) { }

  ngOnInit() {
    this.rateReviewService.onGetRateReviewByProductId(this.index).subscribe(data => {
      if (data.length != 0)
      {
        console.log(data);
        this.rateReviewList = data;
        this.onCalculateAverage();
      }
    });
  }

  onProductDetails(id) {
    this.router.navigate(["productdetail/" + id], { relativeTo: this.activatedRoute });
  }

  onCalculateAverage() {
    this.totalRate = 0.0;
    this.average = 0.0;
    for (let rateReview of this.rateReviewList) {
      this.totalRate += rateReview.rate;
      this.average = this.totalRate / this.rateReviewList.length;
    }
    return this.average;
  }

}
