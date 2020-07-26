import { User } from "./User.model";
import { Product } from "./Product.model";

export class RateReview {
    private rateReviewId: number;

    private user: User;
    private product: Product;
    private rate: number = 0;
    private feedback: String;
    private date: String;
}