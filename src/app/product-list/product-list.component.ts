import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Product.service';
import { Wishlist } from '../models/Wishlist.model';
import { WishlistService } from '../services/Wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList;
  constructor(private productService: ProductService, private wishlistService: WishlistService) { }

  ngOnInit() {
    this.productService.onGetAllProductService().subscribe(data => {
      this.productList = data;
      console.log(data);
    });
  }

}
