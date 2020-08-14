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
export class ProductService {

    productUpdateChange = new Subject<Product>();
    constructor(private http: HttpClient,
        private tokenStorageService: TokenStorageService) {
    }
    
    onGetAllProductService(): Observable<any> {
        return this.http.get(API + "productAll");
    }

    onGetProductsByTagName(tagName): Observable<any> {
        return this.http.get(API + "category/product-all/" + tagName)
    }
    onGetProductByProductIdService(productId): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.get(API + "product/" + productId, localHttpOptions);
    }

    onAddProduct(productForm): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.post(API + "admin/new-product",
            {
                scaledImage: productForm.value.scaledImage,
                productName: productForm.value.productName,
                price: productForm.value.price,
                quantity: productForm.value.quantity,
                catergoryArray: productForm.value.catergoryArray,
                shortDescription: productForm.value.shortDescription
            }, localHttpOptions);

    }
    onUpdateProduct(id, formData): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.put(API + 'updateProduct/' + id, {
            scaledImage: formData.value.scaledImage,
            productName: formData.value.productName,
            price: formData.value.price,
            quantity: formData.value.quantity,
            shortDescription: formData.value.shortDescription
        },
            localHttpOptions);
    }
}

