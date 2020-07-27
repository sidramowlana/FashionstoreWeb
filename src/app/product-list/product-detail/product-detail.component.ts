import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from '../../services/Product.service';
import { Product } from '../../models/Product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Wishlist } from 'src/app/models/Wishlist.model';
import { WishlistService } from 'src/app/services/Wishlist.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/Cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @ViewChild('selectedSize') selectedSize: ElementRef;
  @ViewChild('selectedQuantity') selectedQuantity: any;
  product: Product;
  wishlist: Wishlist;
  id;
  productName;
  description;
  price;
  quantity;
  catergory;
  scaledImage;
  cartAddMode = false;
  isFavourite = false;
  size: String[] = ['S', 'M', 'L'];
  constructor(private productService: ProductService,
    private wishlistService: WishlistService,
     private cartService: CartService,
      private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log(this.id)
        console.log("this is id: " + this.id);
        this.productService.onGetProductByProductIdService(this.id).subscribe(data => {
          this.product = data;
          console.log(this.product);
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

  }
  totalAmount;
  cartQuantity:number;
  onAddCart() {
    console.log("have to add to cart")
    console.log(this.selectedQuantity.nativeElement.value)
    console.log(this.selectedSize.nativeElement.value)
    this.cartQuantity = this.selectedQuantity.nativeElement.value;
    const cartSize:String = this.selectedSize.nativeElement.value;
    const onePrice = this.price;
    this.totalAmount = onePrice * this.cartQuantity;
    console.log(this.totalAmount)
    this.cartService.onAddCartService(this.id,Number(this.cartQuantity), cartSize, this.totalAmount).subscribe(data => {
      console.log(data);
    });
  }



  onAddRemoveWishlist() {
    this.wishlistService.onAddRemoveWishlistService(this.id).subscribe(() => {
      if (this.isFavourite == true) {
        this.isFavourite = false;
        console.log("item: " + this.isFavourite)
        this.wishlistService.wishListFavouriteChange.next(this.isFavourite);
      }
      else {
        this.isFavourite = true;
        console.log("item: " + this.isFavourite)
        this.wishlistService.wishListFavouriteChange.next(this.isFavourite);
      }
    });
  }
}
