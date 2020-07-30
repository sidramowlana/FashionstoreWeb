import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { Wishlist } from 'src/app/models/Wishlist.model';
import { ProductService } from 'src/app/services/Product.service';
import { WishlistService } from 'src/app/services/Wishlist.service';
import { CartService } from 'src/app/services/Cart.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RateReviewServie } from 'src/app/services/RateReview.service';

@Component({
  selector: 'app-product-item-view',
  templateUrl: './product-item-view.component.html',
  styleUrls: ['./product-item-view.component.css']
})
export class ProductItemViewComponent implements OnInit {
  product: Product;
  wishlist: Wishlist;
  rateReviewList;
  totalRate;
  average;
  id;
  productName;
  scaledImage;
  cartAddMode = false;
  isFavourite = false;
  isClicked: boolean = false;

  constructor(private productService: ProductService,
    private wishlistService: WishlistService,
    private cartService: CartService,
    private rateReviewService: RateReviewServie,
    private activatedRoute: ActivatedRoute, private router: Router
  ) {
  }

  ngOnInit() {}
  //   console.log("working")

  //   this.activatedRoute.params.subscribe(
  //     (params: Params) => {
  //       this.id = +params['id'];
  //       console.log(this.id)
  //       this.productService.onGetProductByProductIdService(this.id).subscribe(data => {
  //         this.product = data;
  //         this.scaledImage = this.product.scaledImage
  //       });
  //     }
  //   );
  //   this.wishlistService.getAWishlistProductService(this.id).subscribe(data => {
  //     this.wishlist = data;
  //     if (this.wishlist != null) {
  //       this.isFavourite = true
  //       this.wishlistService.wishListFavouriteChange.next(this.isFavourite);
  //     } else {
  //       this.isFavourite = false
  //     }
  //   });
  //   this.rateReviewService.onGetRateReviewByProductId(this.id).subscribe(data => {
  //     this.rateReviewList = data;
  //     this.average = this.rateReviewService.onCalculateAverage(this.rateReviewList);
  //   });

  // }

  // onViewDetails(id) {
  //   this.router.navigate(['details/' + id], { relativeTo: this.activatedRoute })
  // }

  // onViewRateReviewDetails(id) {
  //   this.router.navigate(['ratesReviews/' + id], { relativeTo: this.activatedRoute });
  // }
}