import { User } from "./User.model";
import { Product } from "./Product.model";

export class Cart {

    private cartId: number;
    private user: User;

    private product: Product;

    private quantity: number;
    private size: String;
    private total: number;
    private isPurchased: boolean;

    public Cart(user: User, product: Product, quantity: number, size: String, total: number, isPurchased: boolean) {
        this.user = user;
        this.product = product;
        this.quantity = quantity;
        this.size = size;
        this.total = total;
        this.isPurchased = false;
    }
}