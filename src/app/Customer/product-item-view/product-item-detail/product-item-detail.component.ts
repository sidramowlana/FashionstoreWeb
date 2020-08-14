import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WishlistService } from 'src/app/services/Wishlist.service';
import { CartService } from 'src/app/services/Cart.service';
import { RateReviewServie } from 'src/app/services/RateReview.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/models/Product.model';
import { Wishlist } from 'src/app/models/Wishlist.model';
import { ProductService } from 'src/app/services/Product.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  @ViewChild('selectedSize') selectedSize: ElementRef;
  @ViewChild('selectedQuantity') selectedQuantity: any;
  product: Product;
  wishlist: Wishlist;
  rateReviewList;
  totalRate;
  average;
  id;
  productName: String;
  description: String;
  price: number;
  quantity: number;
  catergory: String;
  scaledImage: String;
  cartAddMode = false;
  isFavourite = false;
  size: String[] = ['S', 'M', 'L'];
  
  totalAmount;
  cartQuantity: number;
  message: string;
  
  constructor(private wishlistService: WishlistService, private toastr: ToastrService,
    private cartService: CartService, private productService: ProductService,
    private rateReviewService: RateReviewServie,
    private activatedRoute: ActivatedRoute,
    private router:Router) {
  }

  ngOnInit() {
  
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.id = +params['id'];
        console.log(this.id);
        this.productService.onGetProductByProductIdService(this.id).subscribe(data => {
          this.product = data;
          console.log(this.product)
          this.productName = this.product.productName
          this.description = this.product.shortDescription
          this.price = this.product.price
          this.quantity = this.product.quantity
          this.scaledImage = this.product.scaledImage
        });
      }
    );
    this.wishlistService.getAWishlistProductService(this.id).subscribe(data => {
          this.wishlist = data;
          if (this.wishlist != null) {
            this.isFavourite = true
            this.wishlistService.wishListFavouriteChange.next(this.isFavourite);
          } else {
            this.isFavourite = false
          }
        });
    this.rateReviewService.onGetRateReviewByProductId(this.id).subscribe(data => {
          this.rateReviewList = data;
          this.average = this.rateReviewService.onCalculateAverage(this.rateReviewList);
        });
  }


  onAddCart() {
    console.log(this.selectedQuantity.nativeElement.value)
    console.log(this.selectedSize.nativeElement.value)

    if (this.selectedQuantity.nativeElement.value == '') {
      this.toastr.error("Quantity not given", "Please select your quantity");
    }

    else {
      const cartSize: String = this.selectedSize.nativeElement.value;
      this.cartQuantity = this.selectedQuantity.nativeElement.value;
      const onePrice = this.price;
      this.totalAmount = onePrice * this.cartQuantity;
      console.log(this.id+" = "+this.cartQuantity+" = "+cartSize+ " = "+this.totalAmount)
      this.cartService.onAddCartService(this.id, Number(this.cartQuantity), cartSize, this.totalAmount).subscribe(data => {
        console.log(data);
        this.cartService.cartListCountChange.next();
        this.toastr.success(data.message);
      });
    }
  }



  onAddRemoveWishlist() {
    this.wishlistService.onAddRemoveWishlistService(this.id).subscribe(data => {
      this.message= data.message;
      console.log(data)
      if (this.isFavourite == true) {
        this.isFavourite = false;
        console.log("item: " + this.isFavourite)
        this.wishlistService.wishListFavouriteChange.next(this.isFavourite);
        this.wishlistService.wishListListCountChange.next();
        this.toastr.success(data.message);

      }
      else {
        this.isFavourite = true;
        console.log("item: " + this.isFavourite)
        this.wishlistService.wishListFavouriteChange.next(this.isFavourite);
        this.wishlistService.wishListListCountChange.next();
        this.toastr.success("Added to your Wishlist");

      }
    });
  }

  onRatesReviews(index){
    this.router.navigate(['/products/ratesReviews/'+index]);
  }

}

