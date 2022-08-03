import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class LoginService {

    private url = "/api/login";

    constructor(private http: HttpClient) {
    }

    login(user: User) {
        return this.http.post(this.url, user);
    }
}