import { HttpHeaders, HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, Subject } from "rxjs";
import { TokenStorageService } from "./tokenStorage.service"
import { Tag } from "../models/Tag.model";

const API = 'http://localhost:8080/api/tags/';

const getHttpOptions = (token: String) => {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    }
}
@Injectable()
export class TagService {
    tagUpdate = new Subject<Tag[]>();

    constructor(private http: HttpClient,
        private tokenStorageService: TokenStorageService) {
    }

    onAddNewTag(tagForm): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.post(API + "admin/createTag", {
            tag: tagForm.value.tag
        }, localHttpOptions);
    }

    onGetAllTags() {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.get(API + "all", localHttpOptions);
    }


    onDeleteTagService(tagId) {
        const localHttpOptions = getHttpOptions(this.tokenStorageService.getToken());
        return this.http.delete(API + "delete/" + tagId, localHttpOptions);

    }
}