import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenStorageService } from "./tokenStorage.service";
import { Observable, Subject, ObservableLike } from "rxjs";
import { Orders } from "../models/Orders.model";

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
    updatePendingOrderList = new Subject<Orders[]>();
    user;
    constructor(private http: HttpClient,
        private tokenStorageService: TokenStorageService) {
    }
    onAddOrdersService(formData, date, status) {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.post(API + 'orders/add-order/',
            {
                postalCode: formData.value.postalCode,
                city: formData.value.city,
                address: formData.value.address,
                total: formData.value.total,
                date: date,
                status: status
            }, localHttpOptions);
    }
    onAddCartOrdersService(cartOrders): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.post(API + 'cart/add-order/',
            {
                orders: cartOrders.orders,
                cart: cartOrders.cart

            }, localHttpOptions);
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
    onUpdateOrderStatusByOrderId(status, id): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.put(API + 'order-status/' + id + "/" + status, localHttpOptions)
    }
    onGetAllUserOrdersByStatus(orderStatus): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        this.user = this.tokenStorageService.getUser();
        return this.http.get(API + 'status/' + orderStatus + '/user/' + this.user.id, localHttpOptions)
    }
    onGetAllCartOrdersByUserId():Observable<any>{
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        this.user = this.tokenStorageService.getUser();
        return this.http.get(API + 'cart-orders/' + this.user.id, localHttpOptions)
    }
}   