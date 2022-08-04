var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { LoginUser } from '../loginUser';
let LoginComponent = class LoginComponent {
    constructor(loginService) {
        this.loginService = loginService;
    }
    onSubmit() {
        var user = new LoginUser(this.name, this.password);
        this.loginService.login(user);
        console.log(this.name + ' ' + this.password);
    }
    ngOnInit() {
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
        providers: [LoginService]
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map