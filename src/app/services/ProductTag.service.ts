import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenStorageService } from "./tokenStorage.service";
import { Observable, Subject } from "rxjs";
import { Product } from "../models/Product.model";

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
export class ProductTagService{

}