import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WishlistService } from 'src/app/services/Wishlist.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RateReviewServie } from 'src/app/services/RateReview.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-item-card',
  templateUrl: './product-item-card.component.html',
  styleUrls: ['./product-item-card.component.css']
})
export class ProductItemCardComponent implements OnInit {


  @Input() productElement: Product;
  @Input() index: number;
  isFavourite: boolean;
  message: String;
  isLogged;
  wishlistProduct: any;
  product: Product;
  totalRate;
  average;
  rateReviewList;

  constructor(private authService: AuthenticationService,
    private toastr: ToastrService,
    private wishlistService: WishlistService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private rateReviewService: RateReviewServie) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.wishlistService.getAWishlistProductService(this.productElement.productId).subscribe((data) => {
        this.wishlistProduct = data;
        if (data != null) {
          if (this.wishlistProduct.product.productId == this.productElement.productId) {
            this.isFavourite = true
          }
          else {
            this.isFavourite = false;
          }
        }
      });
    }
    this.rateReviewService.onGetRateReviewByProductId(this.index).subscribe(data => {
      if (data.length != 0) {
        this.rateReviewList = data;
        this.average = this.rateReviewService.onCalculateAverage(this.rateReviewList);
      }
    });
  }


  onAddRemoveWishList(productId) {   
     if (this.authService.loggedIn()) {
    this.wishlistService.onAddRemoveWishlistService(productId).subscribe((data) => {
      if (this.isFavourite == true) {
        this.isFavourite = false;
        this.wishlistService.wishListFavouriteChange.next(this.isFavourite);
        this.wishlistService.wishListListCountChange.next();
        this.toastr.success(data.message);
      }
      else {
        this.isFavourite = true;
        this.wishlistService.wishListFavouriteChange.next(this.isFavourite);
        this.wishlistService.wishListListCountChange.next();
        this.toastr.success("Added to your wishlist");
      }
    },
      err => {
        this.toastr.error("Somethingwent wong with the system", "Could not peform the function");
      }
    );
     }else{
      this.toastr.warning("Please login to add product to your wishlist")
     }
  }

  onDetails(index) {
    if (this.authService.loggedIn()) {

      this.activatedRoute.params.subscribe((params:Params)=>{
        console.log(params)
      });
      // if()
      this.router.navigate(['products/details/' + index])
      // , { relativeTo: this.activatedRoute });
    } else {
      this.toastr.warning("Please login to view further details")
    }
  }
}
