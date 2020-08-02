import { Cart } from "./Cart.model";
import { Orders } from "./Orders.model";

export class CartOrders{
    private cardOrderId:number;
    private cart:Cart ;
    private orders:Orders ;

    constructor(orders:Orders,cart:Cart){this.orders = orders,this.cart = cart}
}