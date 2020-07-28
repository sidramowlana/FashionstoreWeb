import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenStorageService } from "./tokenStorage.service";
import { Observable } from "rxjs";

const API = 'http://localhost:8080/api/orders/';

const getHttpOptions = (token: String) => {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    }
}

@Injectable()
export class OrdersService {

    constructor(private http: HttpClient,
        private tokenStorageService: TokenStorageService) {
    }

    onGetAllPendingOrdersByStatus(status): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.get(API + 'all/' + status, localHttpOptions);
    }

    onGetAllCartByOrderId(id): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.get(API + 'cart/' + id, localHttpOptions)
    }

    onGetAOrderById(id): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.get(API + 'order/' + id, localHttpOptions)
    }
}   