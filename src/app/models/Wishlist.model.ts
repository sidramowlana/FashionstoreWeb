import { User } from "./User.model";
import { Product } from "./Product.model";

export class Wishlist {

    public wishlistId: number;
    public user: User
    public product: Product;

    constructor(user: User, product: Product) {
        this.user = user;
        this.product = product;
    }
}