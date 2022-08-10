import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Token } from '../models/token';
import { AUTH_API_URL } from '../app-injection-tokens';
import { tap } from 'rxjs/operators';
export const ACCESS_TOKEN_KEY = 'products_access_token'

@Injectable()
export class LoginService {

    private url = "/api/auth/login";

    constructor(
        private http: HttpClient,
        @Inject(AUTH_API_URL) private apiUrl: string,
        private jwtHelper: JwtHelperService,
        private router: Router
    ) {
    }

    login(login: string, password: string): Observable<Token> {
        var token = this.http.post<Token>(this.apiUrl + this.url, { login, password });

        token.pipe(
            tap(token => {
                localStorage.setItem(ACCESS_TOKEN_KEY, token.access_token)
            })
        );

        return token;
    }

    isAuth(): boolean {
        var token = localStorage.getItem(ACCESS_TOKEN_KEY);
        return token && !this.jwtHelper.isTokenExpired(token);
    }

    logout(): void {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        this.router.navigate(['']);
    }
}