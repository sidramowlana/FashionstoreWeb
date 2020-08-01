import { HttpHeaders, HttpClient, HttpRequest, HttpParams } from "@angular/common/http";
import { TokenStorageService } from "./tokenStorage.service";
import { Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Cart } from "../models/Cart.model";

const API = 'http://localhost:8080/api/users/';


const getHttpOptions = (token: String) => {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    }
}
@Injectable()
export class UserService {
    constructor(private http: HttpClient,
        private tokenStorageService: TokenStorageService) {
    }
    onGetAUserService(): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        const user = this.tokenStorageService.getUser();
        return this.http.get(API + "user/" + user.id, localHttpOptions);
    }

}