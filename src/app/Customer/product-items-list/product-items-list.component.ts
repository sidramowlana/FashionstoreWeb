import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/Product.service';
import { WishlistService } from 'src/app/services/Wishlist.service';

@Component({
  selector: 'app-product-items-list',
  templateUrl: './product-items-list.component.html',
  styleUrls: ['./product-items-list.component.css']
})
export class ProductItemsListComponent implements OnInit {

  productList;
  constructor(private productService: ProductService, private wishlistService: WishlistService) { }

  ngOnInit() {
    this.productService.onGetAllProductService().subscribe(data => {
      this.productList = data;
      console.log(data);
    });
  }

}
