import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/Product.model";
import { AuthenticationService } from "src/app/services/authentication.service";
import { Router, ActivatedRoute } from "@angular/router";
import { WishlistService } from "src/app/services/Wishlist.service";
import { Wishlist } from "src/app/models/Wishlist.model";
import { ProductService } from "src/app/services/Product.service";


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  @Input() productElement: Product;
  @Input() index: number;
  isFavourite: boolean = false;
  message: String;
  isLogged;
  wishlistProduct: any;
  product: Product;

  constructor(private authService: AuthenticationService,
    private wishlistService: WishlistService,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
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

  onAddRemoveWishList(productId) {
    this.wishlistService.onAddRemoveWishlistService(productId).subscribe(() => {
      if (this.isFavourite == true) {
        this.isFavourite = false;
      }
      else {
        this.isFavourite = true;
      }
    }
      ,
      err => {
        console.log("error is: " + err.error.error.message);
        console.log("error is: " + err.error.error.stack);
      }
    );
  }

  onDetails(productId) {
    this.productService.onGetProductByProductId(productId).subscribe(data => {
      this.product = data;
      console.log(this.product);

    })
  }


}
