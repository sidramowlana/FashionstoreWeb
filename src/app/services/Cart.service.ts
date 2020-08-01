import { HttpHeaders, HttpClient, HttpRequest, HttpParams } from "@angular/common/http";
import { TokenStorageService } from "./tokenStorage.service";
import { Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Cart } from "../models/Cart.model";

const API = 'http://localhost:8080/api/cart/';


const getHttpOptions = (token: String) => {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    }
}
@Injectable()
export class CartService {
    cartListUpdate= new Subject<Cart[]>();
    
    constructor(private http: HttpClient,
        private tokenStorageService: TokenStorageService) {
    }
    onAddCartService(productId, quantity, size, total): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.post<any>(API + "add-cart/" + productId, {},
            { params: { quantity, total, size }, ...localHttpOptions });
    }
    onGetAllCartItemByUserIdService(): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.get(API + "cartAll", localHttpOptions);
    }
    onDeleteCartIdService(cartId): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.delete(API + "delete/"+cartId, localHttpOptions);  
    }
}