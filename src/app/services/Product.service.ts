import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenStorageService } from "./tokenStorage.service";
import { Observable } from "rxjs";

const API = 'http://localhost:8080/api/products/';


const getHttpOptions = (token: String) => {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    }
}

@Injectable()
export class ProductService{

    constructor(private http: HttpClient,
        private tokenStorageService: TokenStorageService) {
    }
    onGetAllProductService(): Observable<any> {
        return this.http.get(API + "productAll");
    }
    
    onGetProductByProductId(productId):Observable<any>
    {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.get(API+"product/"+productId,localHttpOptions);
    }
}
