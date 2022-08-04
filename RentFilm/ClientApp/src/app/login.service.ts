import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from './loginUser';

@Injectable()
export class LoginService {

    private url = "/api/auth";

    constructor(private http: HttpClient) {
    }

    login(user: LoginUser) {
        return this.http.post(this.url, user);
    }
}