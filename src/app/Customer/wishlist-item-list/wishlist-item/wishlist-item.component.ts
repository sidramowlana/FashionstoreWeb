import { Component, OnInit, Input } from '@angular/core';
import { WishlistService } from 'src/app/services/Wishlist.service';
import { TokenStorageService } from 'src/app/services/tokenStorage.service';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent implements OnInit {
  @Input() wishlistElement;
  @Input() index;
  constructor(private wishListService: WishlistService,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
  }

  onRemoveWishList(productId) {
    console.log("should remvoe: "+productId)
    this.wishListService.onAddRemoveWishlistService(productId).subscribe(data=>{
      console.log(data);
      this.wishListService.wishListListChange.next();
    });
  }
}
