var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';
//import { Router } from '@angular/router';
//import { Token } from '../models/token';
//import { AUTH_API_URL } from '../app-injection-tokens';
//import { tap } from 'rxjs/operators';
//export const ACCESS_TOKEN_KEY = 'products_access_token'
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.url = "/api/auth/login";
    }
};
LoginService = __decorate([
    Injectable()
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map