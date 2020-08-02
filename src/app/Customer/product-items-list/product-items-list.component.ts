import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/Product.service';
import { WishlistService } from 'src/app/services/Wishlist.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-items-list',
  templateUrl: './product-items-list.component.html',
  styleUrls: ['./product-items-list.component.css']
})
export class ProductItemsListComponent implements OnInit {

  productList;
  routeName;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private wishlistService: WishlistService) { }

  ngOnInit() {
    this.productService.onGetAllProductService().subscribe(data => {
      this.productList = data;
      console.log(data);
    });       
  }

}
