import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenStorageService } from "./tokenStorage.service";
import { Observable, Subject } from "rxjs";
import { Product } from "../models/Product.model";

const API = 'http://localhost:8080/api/rate/';


const getHttpOptions = (token: String) => {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    }
}

@Injectable()
export class RateReviewServie {
    constructor(private http: HttpClient,
        private tokenStorageService: TokenStorageService) {
    } 
    
    onGetRateReviewByProductId(id): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.get(API + "product-all/" + id, localHttpOptions);
    }
   
}