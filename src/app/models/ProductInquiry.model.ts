import { User } from "./User.model";
import { Product } from "./Product.model";

export class ProductInquiry {

    private ProductInquiryId: number;

    private user: User;
    private question: String;

    private product: Product;
    private date: String;
    private answers: String;
    private isReplied: boolean;
}