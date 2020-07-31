import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/tokenStorage.service';
import { WishlistService } from 'src/app/services/Wishlist.service';

@Component({
  selector: 'app-wishlist-item-list',
  templateUrl: './wishlist-item-list.component.html',
  styleUrls: ['./wishlist-item-list.component.css']
})
export class WishlistItemListComponent implements OnInit {

  constructor(private wishListService: WishlistService,
    private tokenStorageService: TokenStorageService) { }
  wishlist;
  count: number;

  ngOnInit() {
    this.wishListService.onGetAllWishlistByUserIdService().subscribe(data => {
      this.wishlist = data;
      this.count = this.wishlist.length;
    });
    this.wishListService.wishListListChange.subscribe(userId => {
      this.wishListService.onGetAllWishlistByUserIdService().subscribe(data => {
        this.wishlist = data;
        this.count = this.wishlist.length;
      });
    });
  }

}
